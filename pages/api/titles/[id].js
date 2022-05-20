const fs = require('fs');
let departments = require('../../../database/departments.json')

export const departmentsRepo = {
  getById: id => departments.find(x => x.id.toString() === id.toString()),
  find: x => departments.find(x),
  update,
  delete: _delete
};

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  const { id } = req.query;

  if (req.method === 'GET') {
    const data = departmentsRepo.getById(id);
    res.status(200).json(data)
  }

  if (req.method === 'PUT') {
    const params = req.body;
    const data = departmentsRepo.update(id, params);
    res.status(202).json(data)
  }

  if (req.method === 'DELETE') {
    departmentsRepo.delete(id)
    res.status(202).json(`department ${id} was deleted`)
  }
}

function update(id, params) {
  const department = departments.find(x => x.id.toString() === id.toString());

  // set date updated
  department.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(department, params);
  saveData();
  return department;
}

function _delete(id) {
    // filter out deleted department and save
    departments = departments.filter(x => x.id.toString() !== id.toString());
    saveData();
    return null;
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/departments.json', JSON.stringify(departments, null, 4));
}
