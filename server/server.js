const express = require("express")
const cors = require("cors")
const app = express()

const { getHomePage, getCSS, getJavaScript, getProfile, getRollbar } = require('./controller/controller.js')

app.use(cors())
app.use(express.json())
app.use(express.static('client'))


// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'))
// })
app.get('/', getHomePage)
app.get('/css', getCSS)
app.get('/js', getJavaScript)
app.get('/profile', getProfile)
app.get('/rollbar', getRollbar)


const port = process.env.PORT || 4000


app.listen(port,console.log("Server running on 4000"))