const mongoose = require('mongoose');

//Création de schéma pour prise de rendez-vous
const rendezVousSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  motif: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  telephone : {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  heure: {
    type: String,
    required: true,
    unique: true,
    unique: true,
  },
 
});

const  rendezVous = mongoose.model('rendezVous',  rendezVousSchema);

module.exports= rendezVous;