const fs = require("fs");
const app = require("express").Router();
const {v1:uuidv1} = require("uuid");

app.get("/notes", (req, res)=>{
    var data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    res.json(data);
});
app.post("/notes", (req, res)=>{
    const newNote = req.body;
    newNote.id = uuidv1()
    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
    data.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(data))
    res.json(data);
}
);

 app.delete("/api/notes/:id", (req, res)=>{
    res.send('delete'+ req.params.id)
//  data.filter((note)=> note.id !== req.params.id)
    // const {id} = req.params

    
    
   
 });
module.exports = app;