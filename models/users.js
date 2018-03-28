'use strict'

const request = require('superagent')
const conect = require('../config')
const userModel = {}

userModel.getUsers = async (callback) => {
  request
  .get(`http://${conect.host}/users`)
  .end(function(err, res) {
    if (err) {
      console.log(`Ha ocorrido el siguiente error: ${err.message}`)
      callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
    } else {
      callback(null, res.body)
    }
  });
}

module.exports = userModel
