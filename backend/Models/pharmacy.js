const mongoose = require('mongoose');

// Définition du schéma pharmacie
const pharmacySchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;
