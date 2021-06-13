
const fs = require("fs");
const notesData = require('../db/db.json');

// ROUTING

module.exports = (app) => {

  app.get("/api/notes", (req, res) => res.json(notesData));

  // API POST Requests

  app.post("/api/notes", (req, res) => {
      notesData.push(req.body);
      fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log('Wrote Data!!!!');
        res.json(notesData);
      });

})};
