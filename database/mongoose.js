const mongoose = require('mongoose')
const dbName = 'phone-book'

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, (e) => {
    if (e) { console.log(e) } else { console.log(`Connected to ${dbName} database successfuly!`);}
})