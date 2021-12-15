
  
const express = require('express');
const fs = require('fs');
const path = require('path');
 const note = require("./db/db.json");
const url = require('./public/routes/urlRoute.js');
const dbRoute = require('./public/routes/dbRoute.js')
const PORT  = process.env.PORT ||  3005;
const app = express();



 app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
 );

// // GET request for note
//  app.get('/api', (req, res)=>{
//      res.json(`${note} request received to get note`)
//     console.info(`${req.method}request recieived to get note`)
// });
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}🚀`)
});

// request('./public/routes/dbRoute')
// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

