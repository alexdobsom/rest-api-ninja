const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')

//get a list of ninjas form the db
router.get('/ninjas', function(req, res, next){
  // res.send({type: 'GET'})
  res.send('sdkfjsdkf')
})

//add a new ninja to the db
router.post('/ninjas', function(req, res, next){
  // console.log(req.body)
  Ninja.create(req.body).then(function(ninja){
    res.send(ninja)
  }).catch(next)

})

//update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
  Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Ninja.findOne({_id:req.params.id}).then(function(ninja){
      res.send({type: 'PUT'})
    })
  })
})


//delete a ninja form the db
router.delete('/ninjas/:id', function(req, res, next){
  // console.log(req.params.id)
  Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
    res.send(ninja)
  })
  // res.send({type: 'DELETE'})
})

module.exports = router;