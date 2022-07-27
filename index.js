const express = require('express')
require('./database/mongoose')
const phonebookRouter = require('./routers/phonebook')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(phonebookRouter)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})