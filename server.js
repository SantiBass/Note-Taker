
  
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


app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
});
// request('./public/routes/dbRoute')
// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

