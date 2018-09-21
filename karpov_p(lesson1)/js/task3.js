class Human {
    constructor(name, age, dob ) {
        this.name = name
        this.age = age
        this.dob = dob
    }
    displayInfo() {
        return `name: ${this.name}, age: ${this.age}, date of birth: ${this.dob}`
    }
    static getPersonByName (firstName, arrayName) {
    return arrayName.filter(item => item.name === firstName)[0]
    }
}

class Employee extends Human {    
    constructor(name, age, dob, salary, dept) {
        super(name, age, dob)
        this.salary = salary
        this.dept = dept
    } 
    displayInfo() {
        return `${super.displayInfo()}, salary: ${this.salary}, dept: ${this.dept}`
    }
    
}
class Manager extends Employee {
    constructor(name, age, dob, salary, dept) {
        super(name, age, dob, salary, dept)
        this.developersList = []
    }
    addDeveloper(firstName) {developers.filter((item) => {
        if (item.name === firstName) {
            item.manager = this.name
            this.developersList.push(item)            
        }
        
    })}
    removeDeveloper(firstName) {this.developersList.filter((item, index) => {
        if (item.name === firstName) {
            item.manager = 'not connected to manager'
            this.developersList.splice(index, 1)                
        }           
    })}     
    
}
class Developer extends Employee {    
    constructor(name, age, dob, salary, dept, manager) {
        super(name, age, dob, salary, dept)
        this.manager = manager
    }
    changeManager(firstName) {
        if(this.manager !== firstName) {
            if(this.manager !== undefined) {
                Human.getPersonByName(this.manager, managers).removeDeveloper(this.name)
            }
            Human.getPersonByName(firstName, managers).addDeveloper(this.name)
        }
    }   
}

const developers = [
    new Developer('Brian', 49, '05.01.1969', 20000, 'A'),
    new Developer('Jeordie', 47, '20.06.1971', 20000, 'A'),
    new Developer('Timothy', 49, '25.06.1969', 20000, 'Ex'),
    new Developer('Stephen', 54, '06.05.1954', 20000, 'Ex'),
    new Developer('Kenneth', 51, '28.09.1966', 20000, 'Ex')
]

const managers = [
    new Manager('Tyler', 53, '05.06.1965', 100000, 'A'),
    new Manager('Trent', 53, '17.05.1965', 100000, 'Ex')
]

// demonstration

//add Developers to managers
Human.getPersonByName('Tyler', managers).addDeveloper('Brian')
Human.getPersonByName('Tyler', managers).addDeveloper('Jeordie')
Human.getPersonByName('Tyler', managers).addDeveloper('Kenneth')
Human.getPersonByName('Trent', managers).addDeveloper('Timothy')
Human.getPersonByName('Trent', managers).addDeveloper('Stephen')

//change manager by developer
Human.getPersonByName('Kenneth', developers).changeManager('Trent')

//result
console.log(Human.getPersonByName('Tyler', managers))
console.log(Human.getPersonByName('Trent', managers))
console.log(Human.getPersonByName('Brian', developers))

//displayInfo
console.log(Human.getPersonByName('Tyler', managers).displayInfo())
