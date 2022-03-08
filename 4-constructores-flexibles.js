class Employee {
    constructor(_name, _dept) {
        this.name = _name || '';
        this.dept = _dept || 'general'
    }
}

class WorkerBee extends Employee {
    constructor(_name, _projs){
        super(_name);
        this.projects = _projs || [];
    }
}

class Engineer extends WorkerBee {
    constructor(_name, _projs, _mach){
        super(_name, _projs);
        this.dept = 'engineering';
        this.machine = _mach || '';
    }
}

let jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');
console.log(jane)
