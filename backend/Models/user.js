const mongoose = require('mongoose');

//Création de schéma pour les utilisateurs 
const UserSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
  entreprise : {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports= User;