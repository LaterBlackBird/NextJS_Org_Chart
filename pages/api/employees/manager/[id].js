const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let employees = require('../../../../database/employees.json');

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  const { id } = req.query;

  if (req.method === 'GET') {
    const data = employees.filter(employee => employee.manager.id === parseInt(id))
    res.status(200).json(data)
  }
}
