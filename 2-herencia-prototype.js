function Employee() {
    //constructor() {
        this.name = '';
        this.dept = 'general'
    //}
}

function Manager() {
    Employee.call(this);
    this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
}

WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;

// Segundo nivel de herencia

function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
    WorkerBee.call(this);
    this.dept = 'engineering';
    this.machine = '';
}

Engineer.prototype = Object.create(WorkerBee.prototype);
Engineer.prototype.constructor = Engineer;

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
