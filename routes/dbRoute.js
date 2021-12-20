const fs = require("fs");
const noteApp = require("express").Router();
const { v1: uuidv1 } = require("uuid");

noteApp.get("/notes", (req, res) => {
    var data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    res.json(data);
});

noteApp.post("/notes", (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv1()
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    data.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
});

noteApp.delete("/notes/:id", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8", (err) => {
        if (err) throw err
    }))
    console.log(data)
    console.log("ABOVE IS 23 BELOW IS 28")
let newData = data.filter(note => note.id != req.params.id)

   fs.writeFile("./db/db.json",  JSON.stringify(newData), (err) => {
    if (err) throw err
});
    console.log(data.filter(note => note.id != req.params.id))

    // notes.splice(req.params.id, 1);
    // updatedb();
    // const {id} = req.params




});
module.exports = noteApp;