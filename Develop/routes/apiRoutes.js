
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
    // splice(start, deleteCount)
    notesData.splice({ id: req.params.id  }, 1); 
    fs.writeFile('./Develop/db/db.json', JSON.stringify(notesData), (err) => {
      if (err) throw err;
      console.log('CHANGED DATA!!!!');
      res.json(notesData);
      console.log('notesData AFTER:', notesData)
    });
  })

};

// Request : From Client to Server
// Response: From Server to Client
// Server: Receive Request and Send Response
// Client: Send Request and Receive Response


// https://expressjs.com/en/guide/routing.html
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys