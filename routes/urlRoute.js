const noteApp = require("express").Router();
const path = require("path");
noteApp.get("/notes", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/notes.html"));

});
noteApp.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
    

module.exports = noteApp;