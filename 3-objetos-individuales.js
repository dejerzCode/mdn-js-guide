import {Employee, Manager, WorkerBee, SalesPerson, Engineer} from './1-herencia-clases.js'
//import {Employee, Manager, WorkerBee, SalesPerson, Engineer} from './2-herencia-prototype.js'

Employee.prototype.specialty = 'none';
console.log(Employee.prototype)

// Parentheses can be omitted if the
let jim = new Employee;
console.log(`Employee (jim) ${JSON.stringify(jim)} specialty: ${jim.specialty}`);

// Adding properties to Prototype

let sally = new Manager();
console.log(`Manager ${JSON.stringify(sally)} specialty: ${sally.specialty}`);

// Parentheses can be omitted if the
let mark = new WorkerBee;
mark.name = 'Doe, Mark';
mark.dept = 'admin';
mark.projects = ['navigator'];

// Adding properties
mark.bonus = 3000;

console.log(`WorkingBee ${JSON.stringify(mark)} specialty: ${mark.specialty}`);

let fred = new SalesPerson();
console.log(`SalesPerson ${JSON.stringify(fred)} specialty: ${fred.specialty}`)

let jane = new Engineer();
jane.specialty = 'code'
console.log(`Engineer ${JSON.stringify(jane)} specialty: ${jane.specialty}`)