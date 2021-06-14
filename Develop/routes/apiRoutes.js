
const fs = require("fs");
const notesData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {

  app.get("/api/notes", (req, res) => res.json(notesData));

  // API POST Requests

  app.post("/api/notes", (req, res) => {
    req.body.id = uuidv4();
      notesData.push(req.body);
      console.log('LOOOOOOOOOKKKKKKKKKKKKK', req.body)
      // console.log('UUID', req.body)
      fs.writeFile('./db/db.json', JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log('Wrote Data!!!!');
        res.json(notesData);
      });

})};


//app.delete uses UUID ${ID} to delete - see line 47 on apiRoutes
//I need a function that loops OR map through the array until it matches a UUID to delete.
// Then I should be able to use same write file from app.post
//https://expressjs.com/en/guide/routing.html