
const RendezVous = require('../Models/PrisedeRendezVous');

// Créer un nouveau rendez-vous
exports.createRendezVous = async (req, res) => {
    const { nom,prenom,motif,email,adresse,telephone,date,heure} = req.body;
    console.log('Données reçues:', req.body);
  try {
    const newRendezVous = await RendezVous.create({ nom,prenom,motif,email,adresse,telephone,date,heure  });
    res.status(201).json(newRendezVous);
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous :', error);
    res.status(400).json({ message: 'Erreur lors de la création du rendez-vous', error });
  }
};

// Obtenir tous les rendez-vous
exports.getAllRendezVous = async (req, res) => {
  try {
    const rendezVousList = await RendezVous.find();
    res.status(200).json(rendezVousList);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des rendez-vous', error });
  }
};

// Obtenir un rendez-vous par ID
exports.getRendezVousById = async (req, res) => {
  try {
    const rendezVous = await RendezVous.findById(req.params.id);
    if (!rendezVous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }
    res.status(200).json(rendezVous);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du rendez-vous', error });
  }
};

// Mettre à jour un rendez-vous
exports.updateRendezVous = async (req, res) => {
  try {
    const updatedRendezVous = await RendezVous.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRendezVous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }
    res.status(200).json(updatedRendezVous);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du rendez-vous', error });
  }
};

// Supprimer un rendez-vous
exports.deleteRendezVous = async (req, res) => {
  try {
    const deletedRendezVous = await RendezVous.findByIdAndDelete(req.params.id);
    if (!deletedRendezVous) {
      return res.status(404).json({ message: 'Rendez-vous non trouvé' });
    }
    res.status(200).json({ message: 'Rendez-vous supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du rendez-vous', error });
  }
};
