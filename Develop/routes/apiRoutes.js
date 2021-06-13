
const fs = require("fs");
const notesData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {

  app.get("/api/notes", (req, res) => res.json(notesData));

  // API POST Requests

  app.post("/api/notes", (req, res) => {
    req.body.uuidv4 = uuidv4();
      notesData.push(req.body);
      // console.log('LOOOOOOOOOKKKKKKKKKKKKK', req.body)
      // console.log('UUID', req.body)
      fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log('Wrote Data!!!!');
        res.json(notesData);
      });

})};
