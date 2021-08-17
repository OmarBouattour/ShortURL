
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken')

const Utilisateur = require('../models/utilisateur');

router.get('/', (req, res) => {
    res.send('from API route')
})

const db = "mongodb://localhost:27017/utilisateurs"

mongoose.connect(db, err =>{
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

router.post('/register', (req, res) =>{
    let utilisateurData = req.body
    let utilisateur = new Utilisateur(utilisateurData)
    utilisateur.save((err, registeredUtilisateur) => {
          
        if (err) {
          console.log(err)    
        } else {
            let payload = {subject: registeredUtilisateur._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
      
        }
    })
})

router.post('/login', (req, res) => {
    let utilisateurData = req.body
    Utilisateur.findOne({email: utilisateurData.email}, (err, utilisateur) => {
      if (err) {
        console.log(err)    
      } else {
        if (!utilisateur) {
          res.status(401).send('Invalid Username')
        } else 
        if ( utilisateur.password !== utilisateurData.password) {
          res.status(401).send('Invalid Password')
        } else {
          
            let payload = {subject: utilisateur._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
    
          

        }
      } 
    })
  })

  

  
  

  
  


module.exports = router;