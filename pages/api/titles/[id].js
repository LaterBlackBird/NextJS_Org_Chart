const fs = require('fs');
let titles = require('../../../database/titles.json')

export const titlesRepo = {
  getById: id => titles.find(x => x.id.toString() === id.toString()),
  find: x => titles.find(x),
  update,
  delete: _delete
};

export default function handler(req, res) {
  console.log(`${req.method} ${req.url}`)
  const { id } = req.query;

  if (req.method === 'GET') {
    const data = titlesRepo.getById(id);
    res.status(200).json(data)
  }

  if (req.method === 'PUT') {
    const params = req.body;
    const data = titlesRepo.update(id, params);
    res.status(202).json(data)
  }

  if (req.method === 'DELETE') {
    titlesRepo.delete(id)
    res.status(202).json(`title ${id} was deleted`)
  }
}

function update(id, params) {
  const title = titles.find(x => x.id.toString() === id.toString());

  // set date updated
  title.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(title, params);
  saveData();
  return title;
}

function _delete(id) {
    // filter out deleted title and save
    titles = titles.filter(x => x.id.toString() !== id.toString());
    saveData();
    return null;
}

// private helper functions
function saveData() {
    fs.writeFileSync('database/titles.json', JSON.stringify(titles, null, 4));
}
