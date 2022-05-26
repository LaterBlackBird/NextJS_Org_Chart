const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let employees = require('../../../database/employees.json');

export const employeesRepo = {
    getAll: () => employees,
    getById: id => employees.find(x => x.id.toString() === id.toString()),
    find: x => employees.find(x),
    create
};

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  
  if (req.method === 'GET') {
    const data = employeesRepo.getAll();
    res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const data = req.body;
    employeesRepo.create(data)
    res.status(201).json('success')
  }
}

function create(employee) {
    // generate new user id
    employee.id = employees.length ? Math.max(...employees.map(x => x.id)) + 1 : 1;

    // set date created and updated
    employee.dateCreated = new Date().toISOString();
    employee.dateUpdated = new Date().toISOString();


    // add and save user
    employees.push(employee);
    saveData();
    return employees;
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/employees.json', JSON.stringify(employees, null, 4));
}