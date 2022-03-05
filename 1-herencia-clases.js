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

// Segundo nivel de herencia

class SalesPerson extends WorkerBee {
    constructor(){
        super();
        this.dept = 'sales';
        this.quota = 100;
    }
}

class Engineer extends WorkerBee {
    constructor(){
        super();
        this.dept = 'engineering';
        this.machine = '';
    }
}

// Ejecución

/*
let e = new Employee();
console.log(`Employee ${JSON.stringify(e)}`);

let m = new Manager();
console.log(`Manager ${JSON.stringify(m)}`);

let w = new WorkerBee();
console.log(`WorkingBee ${JSON.stringify(w)}`);

let s = new SalesPerson();
console.log(`SalesPerson ${JSON.stringify(s)}`)

let n = new Engineer();
console.log(`Engineer ${JSON.stringify(n)}`)
*/

export {Employee, Manager, WorkerBee, SalesPerson, Engineer}