const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app); //приложения общающиеся через http и приложение 
//повшенные на socket будут но одном порту
const io = socketIO(server);

const host = 3000;

server.listen(host, () => console.log(`Server is listening: http://localhost:${host}`));

//настройка socket
// событие connection генерится, когда к серверу кто-либо подключается 
// в качестве аргумента передается параметр socket
// socket - это  новый подключенный клиент
io.on('connection', socket => //прозошло подключение нового клиента
socket.on('message', // если от клиент генерирует message, то происходит обработка (отправка всем клиентам)
message => {
    socket.broadcast.emit('message', message); // отправляем сообщение всем
    socket.emit('message', message); //отправляем сообщение отправителю
    // socket.in(id).emit(...) //отправка по id конкретному пользователю
})) //генерим событие message

//id сокета присваивается при каждом подключении, и желательно его записывать в объект данного клиента
//когда клиент отключается можно удалить его socket.id
//io.on('disconnection', () => {})
