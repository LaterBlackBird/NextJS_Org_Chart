const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let employees = require('../../../database/employees.json');

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  
  if (req.method === 'GET') {
    const data = employees.filter(employee => Object.keys(employee.manager).length === 0)
    res.status(200).json(data)
  }
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/employees.json', JSON.stringify(employees, null, 4));
}