const express = require('express');
const router = express.Router();
const Users = require('../models/signup.models');

router.post('https://prueba-level-up.herokuapp.com/signup', (request, response)=>{
    if (
        (request.body.carnet[0] === "A" &&
        request.body.carnet[2] === "5") &&
        request.body.carnet[5] === "1" || request.body.carnet[5] === "3" ||
        request.body.carnet[5] === "9"
      ) {
    const signedUpUser = new Users({
        carnet:request.body.carnet,
        name:request.body.name,
        address:request.body.address,
        gender:request.body.gender,
        phone:request.body.phone,
        dateBirth:request.body.dateBirth,
        profession:request.body.profession,
        poetry:request.body.poetry
    })

    signedUpUser.save().then(data=>{
        response.json(data)
    })
    .catch(err =>{
        response.json(err)
    })
    }else {
    return response.status(500).send({message:"Error"});
  }
})

router.get('https://prueba-level-up.herokuapp.com/getUsers', (request, response) =>{
    Users.find({}, function(documentos, err){
        if(!err){
            response.send(documentos)
        }else{
            response.send(err)
        }
    })
})


module.exports = router;