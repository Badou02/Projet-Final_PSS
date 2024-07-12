const mongoose = require('mongoose');

// Définition du schéma blog
const BlogSchema = new mongoose.Schema({
  
  titre: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  auteur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Référence au modèle User
    required: true,
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware pour mettre à jour la date de mise à jour
BlogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
