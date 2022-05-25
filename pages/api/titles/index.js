const fs = require('fs');

// in JSON file for simplicity, store in a db for production applications
let titles = require('../../../database/titles.json');

export const titlesRepo = {
    getAll: () => titles,
    getById: id => titles.find(x => x.id.toString() === id.toString()),
    find: x => titles.find(x),
    create
};

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  
  if (req.method === 'GET') {
    const data = titlesRepo.getAll();
    res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const data = req.body;
    titlesRepo.create(data)
    res.status(201).json('success')
  }
}

function create(title) {
    // generate new user id
    title.id = titles.length ? Math.max(...titles.map(x => x.id)) + 1 : 1;

    // set date created and updated
    title.dateCreated = new Date().toISOString();
    title.dateUpdated = new Date().toISOString();


    // add and save user
    titles.push(title);
    saveData();
    return titles;
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/titles.json', JSON.stringify(titles, null, 4));
}