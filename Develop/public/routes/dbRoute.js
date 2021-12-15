const fs = require("fs");
const app = require("express").Router();
app.get("/notes", (req, res)=>{
    let data = Json.parse(fs.readFileSync("./db/db.json", "utf-8"))
    res.json(data);
});
app.post("/notes", (req, res)=>{}
)