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

let e = new Employee();
console.log(`Employee ${JSON.stringify(e)}`);

let m = new Manager();
console.log(`Manager ${JSON.stringify(m)}`);

let w = new WorkerBee();
console.log(`WorkingBee ${JSON.stringify(w)}`);
