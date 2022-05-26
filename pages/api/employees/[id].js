const fs = require('fs');
let employees = require('../../../database/employees.json')

export const employeesRepo = {
  getById: id => employees.find(x => x.id.toString() === id.toString()),
  find: x => employees.find(x),
  update,
  delete: _delete
};

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  const { id } = req.query;

  if (req.method === 'GET') {
    const data = employeesRepo.getById(id);
    res.status(200).json(data)
  }

  if (req.method === 'PUT') {
    const params = req.body;
    const data = employeesRepo.update(id, params);
    res.status(202).json(data)
  }

  if (req.method === 'DELETE') {
    employeesRepo.delete(id)
    res.status(202).json(`employee ${id} was deleted`)
  }
}

function update(id, params) {
  const employee = employees.find(x => x.id.toString() === id.toString());

  // set date updated
  employee.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(employee, params);
  saveData();
  return employee;
}

function _delete(id) {
    // filter out deleted employee and save
    employees = employees.filter(x => x.id.toString() !== id.toString());
    saveData();
    return null;
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/employees.json', JSON.stringify(employees, null, 4));
}
