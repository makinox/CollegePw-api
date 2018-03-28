'use strict'

const request = require('superagent')
const conect = require('../config')
const subjectsModel = {}

subjectsModel.getSubjects = async (callback) => {
  request
    .get(`http://${conect.host}/subjects`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

subjectsModel.getSubject = async (id, callback) => {
  request
    .get(`http://${conect.host}/subjects/${id}`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        // callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

subjectsModel.updateSubject = async (userData, callback) => {
  request
    .put(`http://${conect.host}/subjects/${userData.usuario}`)
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

subjectsModel.insertSubject = async (userData, callback) => {
  request
    .post(`http://${conect.host}/subjects/`)
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

subjectsModel.deleteSubject = async (id, callback) => {
  request
    .delete(`http://${conect.host}/subjects/${id}`)
    .end(function (err, res) {
      if (err) {
        console.log(`Ha ocorrido el siguiente error: ${err.message}`)
        callback(null, { error: `Ha ocorrido el siguiente error: ${err.message}` })
      } else {
        callback(null, res.body)
      }
    })
}

module.exports = subjectsModel
