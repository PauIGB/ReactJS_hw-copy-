const task4input = document.querySelector('#task4-input'),
task4sub = document.querySelector('#task4-sub'),
task4info = document.querySelector('#task4-info')

const resObj = {}
const gen = function* () {  
    task4info.innerText = 'Ваш возраст'
    yield resObj.name = task4input.value
    task4info.innerText = 'Ваш пол'
    yield resObj.age = task4input.value
    task4info.innerText = 'Ваша профессия'
    yield resObj.sex = task4input.value
    task4input.style.display = 'none'
    task4info.innerText = 'Опрос окончен'
    task4sub.value = 'Откройте консоль и нажмите кнопку, чтобы увидеть результат'
    yield resObj.prof = task4input.value
    yield console.log(resObj)
}
const it = gen()
task4sub.onclick = (evt) => {
    evt.preventDefault(evt)       
    it.next()
    task4input.value = ''        
}