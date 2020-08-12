//////////////
//dependencies
//////////////
const express = require('express')
const path = require('path')
const app = express()


///////
//port
//////
const PORT = process.env.PORT || 3000

////////
//middleware
///////
app.use(express.static(path.join(__dirname, "public")));

//////
//routes
///
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//////
//listen
/////
app.listen(PORT, console.log('listening'));
