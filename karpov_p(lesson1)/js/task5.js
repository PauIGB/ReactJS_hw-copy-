    const arr = []
    for(let i = 1; i <= 10; i++)
    arr.push(fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
            .then(response => response.json()))
                  
    Promise.all(arr)
        .then((data) => console.log(data))