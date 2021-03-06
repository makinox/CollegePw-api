'use strict'

const request = require('superagent')
const conect = require('../config')
const userModel = {}

userModel.getUsers = async (callback) => {
  request
    .get(`http://${conect.host}/users`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

userModel.getUser = async (id, callback) => {
  request
    .get(`http://${conect.host}/users/${id}`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

userModel.getUser = async (id, callback) => {
  request
    .get(`http://${conect.host}/users/${id}`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

userModel.updateUser = async (userData, callback) => {
  request
    .put(`http://${conect.host}/users/${userData.usuario}`)
    .send(userData)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

userModel.insertUser = async (userData, callback) => {
  request
    .post(`http://${conect.host}/users/`)
    .send(userData)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

userModel.deleteUser = async (id, callback) => {
  request
    .delete(`http://${conect.host}/users/${id}`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}
module.exports = userModel
