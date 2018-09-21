function loop(times = 0, callback = null) {
    for(let i = 0; i < times; i++) {
        if (callback !== null)
            callback()
    }
}

const times = document.querySelector('#task1-times'),
callback = document.querySelector('#task1-callback'),
task1res = document.querySelector('#task1-res'),
task1sub = document.querySelector('#task1-sub')

task1sub.onclick = (evt) => {
    evt.preventDefault(evt) 
    loop(Number(times.value), eval(callback.value))
}