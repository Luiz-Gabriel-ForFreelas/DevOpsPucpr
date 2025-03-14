const express = require("express")
const app = express()
app.use(express.json())

class Person {
    constructor(id, name, age){
        this.id = id
        this.name = name
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

class Student extends Person{
    constructor(id, name, age, enrolled) {
        super(id, name, age)
        this.id = id
        this.name = name
        this.age = age
        this.enrolled = enrolled
    }

    // Getters
    getEnrolled() {
        return this.enrolled
    }

    // Setters
    setEnrolled(value) {
        this.enrolled = value
    }
}

const student = new Student(1, 'Luiz', 19, true)
console.log(student)