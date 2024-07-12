const mongoose = require ("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Successfully connection in to db...")})
.catch((err)=>console.log("failed db connection",err))

module.exports = mongoose;