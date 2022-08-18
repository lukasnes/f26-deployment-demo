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
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../../client/styles.css'))
    },
    getJavaScript: (req,res) => {
        rollbar.log("They hit our website.")
        res.sendFile(path.join(__dirname, '../../client/main.js'))
    },
    getProfile: (req,res) => {
        res.sendFile(path.join(__dirname, '../../client/profile.html'))
    }
}