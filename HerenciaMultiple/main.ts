class Persona {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class Student extends Persona {
    constructor(name: string) {
        super(name);
    }
}

class Teacher extends Persona {
    constructor(name: string) {
        super(name);
    }
}

const student1 = new Student("Erick");
console.log(student1.getName());

const teacher1 = new Teacher("Magdielito.com");
console.log(student1.getName());


