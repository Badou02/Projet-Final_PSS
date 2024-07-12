const express = require ("express");
const cors = require ("cors");
const dotenv = require('dotenv');

dotenv.config({path:"./Config/.env"});
require("./Config/db")
const app = express()



app.use(cors())
app.use(express.json())



// Routes
app.use('/api/user', require('./Routes/user'));
app.use('/api/pharmacy', require('./Routes/pharmacy'));
app.use('/api/blog', require('./Routes/blog'));
app.use('/api/rendezVous',  require ('./Routes/rendezVous'));


// Port
const port = 5007
app.listen(port, () =>{
    console.log (` server is runnig on port  :${port}....`);
})

module.exports = app;