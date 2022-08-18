const path = require('path')
require('dotenv').config()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log("Hello World")

module.exports = {
    getHomePage: (req,res) => {
        rollbar.error("Page did not load properly")
        rollbar.warning("You need to load better")
        rollbar.critical()
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../../client/styles.css'))
    },
    getJavaScript: (req,res) => {
        res.sendFile(path.join(__dirname, '../../client/main.js'))
    },
    getProfile: (req,res) => {
        rollbar.log("They requested the profile page.")
        res.sendFile(path.join(__dirname, '../../client/profile.html'))
    },
    getRollbar: (req,res) => {
        rollbar.log("They clicked on the castle")
        res.status(200).send("Welcome to my castle")
    }
}