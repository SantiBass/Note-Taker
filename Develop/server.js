
  
const express = require('express');
const path = require('path');
const fs = require('fs');
const {note} = require("./db/db.json");
const { userInfo } = require('os');
const exp = require('constants');
const PORT =  3005;
const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/', (req, res) => res.send('Visit http://localhost:3005/api'));
// GET request for note
app.get('/api/note', (req, res)=>{
    res.json(`${req.method} request received to get note`)
    console.info(`${req.method}request recieived to get note`)
});
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}🚀`)
});


// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

