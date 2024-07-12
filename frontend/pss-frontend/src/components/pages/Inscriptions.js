import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from "../../components/img/PSS.png"; 
import '../../components/Styles/Inscriptions.css'; 
import axios from 'axios';

function Inscriptions() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    profession: '',
    experience: '',
    tel: '',
    entreprise: '',
    specialisation: '',
    email: '',
    password: ''
});
const [message, setMessage] = useState('');
const navigate = useNavigate(); // Utiliser useNavigate pour la redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5007/api/user/signup', formData);
      console.log('Utilisateur inscrit avec succès :', response.data);
      setMessage('Inscription réussie!');
      navigate('/Docteur1', { state: { user: response.data } });
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      setMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };
  

  return (
    <div className="incription-container">
    <div className="inscriptionsForm">

       <h1> <img src={logo} alt="Logo de PSS" className="inscription-logo" /></h1>

                            {message && <p>{message}</p>} {/* Afficher le message */}
                            
         <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
        </div>
         <br/>
        <div className="form-row">
          <input type="text"  name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} />
          <select name="experience" value={formData.experience} onChange={handleChange} className="experience">
          <option value="">Expérience</option>
              {[...Array(21).keys()].map((year) => (
                <option key={year} value={year}>{year} {year === 1 ? 'an' : 'ans'}</option>
              ))}
            </select>        
</div>
        <br/>
        <div className="form-row">
          <input type="text" name="specialisation" placeholder=" specialisation" value={formData.specialisation } onChange={handleChange} />
          <input type="text" name="entreprise" placeholder="Nom de l'entreprise" value={formData.entreprise} onChange={handleChange} />
        </div>
        <br/>
        <div className="form-row">
          <input type="text" name="tel" placeholder="Téléphone" value={formData.tel} onChange={handleChange} />
          
        </div>
        <br/>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} />
        </div>
        
      </form>
      <br/>
                      <div>  <button type="submit" onClick={handleSubmit} >S'inscrire</button></div>
      
    </div>
    </div>
  );
}

export default Inscriptions;
