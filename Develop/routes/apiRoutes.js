
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
      console.log('LOOOOOOOOOKKKKKKKKKKKKK', req.body)
      
      fs.writeFile('./Develop/db/db.json', JSON.stringify(notesData), (err) => {
        if (err) throw err;
        console.log('Wrote Data!!!!');
        res.json(notesData);
      });
})};

//   app.delete("/api/notes/:id", (req, res) => {
//     const deletedUUID = req.params.id
//     console.log('req.params.id:', req.params.id)
//     let notesChanged = require('../db/db.json'); // needed to require here with let for changing json file
//     for (let index = 0; index < notesChanged.length; index++) {
//       if (notesChanged[index].id === deletedUUID);
//     }
//     // fs.writeFile('./db/db.json', JSON.stringify(notesChanged), (err) => {
//     //   if (err) throw err;
//     //   console.log('Wrote Data!!!!');
//     //   res.json(notesChanged);
//   })

// ;


// app.delete uses UUID ${ID} to delete - see line 47 on apiRoutes
// I need a function that loops OR map through the array until it matches a UUID to delete.
// Then I should be able to use same write file from app.post
// https://expressjs.com/en/guide/routing.html
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys