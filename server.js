
  
const express = require('express');
const fs = require('fs');
const path = require('path');
 const note = require("./db/db.json");
const url = require('./routes/urlRoute');
const dbRoute = require('./routes/dbRoute');
const PORT  = process.env.PORT ||  3005;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', url);
app.use(express.static('public'));
app.use('/api', dbRoute);

// app.delete()

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
//  );

// // GET request for note
//  app.get('/api', (req, res)=>{
//      res.json(`${note} request received to get note`)
//     console.info(`${req.method}request recieived to get note`)
// });
app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
});

// request('./public/routes/dbRoute')
// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

