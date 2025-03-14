const express = require("express")
const app = express()
app.use(express.json())

class Person {
    constructor(id, name, age){
        this.id = id,
        this.name = name,
        this.age = age
    }

    // Getters
    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    // Setters
    setName(value) {
        this.name = value
    }

    setAge(value) {
        this.age = value
    }
}

const person = new Person(1, 'Luiz', 10)
console.log(person)