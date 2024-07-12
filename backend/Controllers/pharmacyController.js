const Pharmacy = require('../Models/pharmacy');

// Créer un nouveau pharmacy
exports.createpharma = async (req, res) => {
  const { nom, address, tel} = req.body;
  
  try {

    const newpharmacydispo = await Pharmacy.create({ nom, address, tel });
    res.status(201).json(newpharmacydispo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer toutes les pharmacies
exports.getAllPharmacies = async (req, res) => {
    try {
      const pharmacies = await Pharmacy.find();
      res.status(200).json(pharmacies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Récupérer un pharmacy par ID
exports.getPharmacyById = async (req, res) => {
  const { id } = req.params;

  try {
    const pharmacyid = await Pharmacy.findById(id);
    if (!pharmacyid) {
      return res.status(404).json({message:'pharmacy not found'});
    }
    res.status(200).json(pharmacyid);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un un pharmacy
exports.updatepharmacy = async (req, res) => {
  const { id } = req.params;
  const { nom, address, tel } = req.body;

  try {
    const updatedPharmacy= await Pharmacy.findByIdAndUpdate(
        id, 
        {nom, address, tel}, 
        { new: true });
    if (!updatedPharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found' });
    }
    res.status(200).json(updatedPharmacy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Supprimer un pharmacy
exports.deletePharmacy = async (req, res) => {
  const { id } = req.params;

  try {
    const deletePharmacy = await Pharmacy.findByIdAndDelete(id);
    if (!deletePharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found', });
    }
    res.status(200).json({ message: 'Pharmacy deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
