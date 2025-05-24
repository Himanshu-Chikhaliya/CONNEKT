const mongoose = require('mongoose');
const { MONGO_URL } = require('./env.config');

async function connectDatabase(){
    mongoose.connect(MONGO_URL , (err)=>{
    if (err)
        throw err;
    else
        console.log("database connected...")
    } )
}

module.exports.connectDatabase = connectDatabase;
