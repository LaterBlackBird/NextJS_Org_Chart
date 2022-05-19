const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let departments = require('../../../database/departments.json');

export const departmentsRepo = {
    getAll: () => departments,
    getById: id => departments.find(x => x.id.toString() === id.toString()),
    find: x => departments.find(x),
    create
};

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  
  if (req.method === 'GET') {
    const data = departmentsRepo.getAll();
    res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const data = req.body;
    departmentsRepo.create(data)
    res.status(201).json('success')
  }
}

function create(dept) {
    // generate new user id
    dept.id = departments.length ? Math.max(...departments.map(x => x.id)) + 1 : 1;

    // set date created and updated
    dept.dateCreated = new Date().toISOString();
    dept.dateUpdated = new Date().toISOString();


    // add and save user
    departments.push(dept);
    saveData();
    return departments;
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/departments.json', JSON.stringify(departments, null, 4));
}