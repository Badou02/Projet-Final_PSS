const User = require('../Models/user');

// Création d'un nouvel utilisateur
exports.createUser = async (req, res) => {
  const { prenom,nom,profession,experience,tel, entreprise,specialisation,email, password } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const newUser = await User.create ({ prenom,nom,profession,experience,tel,entreprise,specialisation,email, password });

    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer les informations d'un utilisateur
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour les informations d'un utilisateur
exports.updateUser = async (req, res) => {
  const { prenom,nom,profession,experience,tel, entreprise,specialisation,email, password } = req.body;

  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.nom = nom || user.name;
    user.prenom = prenom || user.name;
    user.profession = profession|| user.profession;
    user.experience = experience || user.experience;
    user.email = email || user.email;
    user.specialisation = specialisation || user.specialisation;
    user.tel = tel|| user.tel;
    user.entreprise = entreprise|| user.entreprise;
    user.password = password || user.password;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
