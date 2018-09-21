const p = 3.14

function calculateArea (figure, ...args) {
    const i = `obj.${figure}(${args})`
    const area = eval(i)
    let res = {            
        figure: figure,
        input: args,
        area: area
    }
    
    res = JSON.stringify(res)
    task2res.innerText = res;
}

let obj = {  
    square: (base) => Math.pow(base, 2),
    rectangle: (base, height) => base * height,       
    triangle: (base, height) => base * height / 2,
    circle: (radius) => p * Math.pow(radius, 2)
}

const figure = document.querySelector('#task2-figure'),
task2res = document.querySelector('#task2-res'),
task2sub = document.querySelector('#task2-sub')

function inputBuild() {    
    const inputsBlock = document.querySelector('#inputs')
    inputsBlock.innerHTML = ''
    const regEx = /(?<=\().*?(?=\))/
    const inputParametrs = eval(`obj.${figure.value}.toString().match(regEx)[0].split(', ')`)
    inputParametrs.forEach((item) => {
        const input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.className = 'task2-input'
        input.setAttribute('placeholder', `please insert ${item} value`)
        input.setAttribute('min', 0)
        inputsBlock.appendChild(input)
    })
}

task2sub.onclick = (evt) => {
    evt.preventDefault(evt) 
    const inputValues = document.querySelectorAll('.task2-input')
    const arr = []
    inputValues.forEach((item) => arr.push(Number(item.value)))
    calculateArea(figure.value, arr.join(', '))
}

figure.onchange = () => inputBuild()

window.onload = () => {
    Object.keys(obj).forEach((item) => {
        const option = document.createElement('option')
        option.innerText = item 
        option.setAttribute('value', item)
        figure.appendChild(option)
    })
    
    inputBuild() 
}