
const fs = require("fs");
const notesData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// ROUTING

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(notesData));
  // API POST Requests

  app.post("/api/notes", (req, res) => {
    req.body.uuidv4 = uuidv4(); //copied from UUID documentation
    notesData.push(req.body);
    console.log('LOOOOOOOOOKKKKKKKKKKKKK', req.body)

    fs.writeFile('./Develop/db/db.json', JSON.stringify(notesData), (err) => {
      if (err) throw err;
      console.log('Wrote Data!!!!');
      res.json(notesData);
    });
  })

  app.delete("/api/notes/:id", (req, res) => {
    console.log('notesData BEFORE:', notesData)
    notesData.splice({ id: req.params.id }, 1); //I am still unsure about this - found on google and tried it cause my loop was not working
    fs.writeFile('./Develop/db/db.json', JSON.stringify(notesData), (err) => {
      if (err) throw err;
      console.log('CHANGED DATA!!!!');
      res.json(notesData);
      console.log('notesData AFTER:', notesData)
    });
  })

};


// https://expressjs.com/en/guide/routing.html
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys