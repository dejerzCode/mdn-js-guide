class Employee {
    constructor() {
        this.name = '';
        this.dept = 'general'
    }
}

class Manager extends Employee {
    constructor(){
        super();
        this.reports = [];
    }
}

class WorkerBee extends Employee {
    constructor(){
        super();
        this.projects = [];
    }
}

let e = new Employee();
console.log(`Employee ${JSON.stringify(e)}`);

let m = new Manager();
console.log(`Manager ${JSON.stringify(m)}`);

let w = new WorkerBee();
console.log(`WorkingBee ${JSON.stringify(w)}`);