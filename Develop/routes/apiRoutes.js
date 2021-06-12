
const notesData = require('../db/db.json');

// ROUTING

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notesData));

  // API POST Requests

  app.post('/api/notes', (req, res) => {
      notesData.push(req.body);
      console.log('notesData:', notesData)
      res.json(true);
  });

};
