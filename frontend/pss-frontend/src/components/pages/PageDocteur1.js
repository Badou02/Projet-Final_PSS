import React, { useState, useEffect  } from 'react';
import PPdocteur1 from "../../components/img/DocteurAliElHusseini.jpg";
import imagepageDentiste from "../../components/img/imagepageDentiste.jpg";
import '../../components/Styles/PageDocteur1.css'; 
import logo from "../../components/img/PSS.png"; 
import axios from 'axios';

function PageDocteur1() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    motif: '',
    email: '',
    adresse: '',
    telephone: '',
    date: '',
    heure: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData); // Ajoutez cette ligne pour vérifier les données
    
    try {
      const response = await axios.post('http://localhost:5007/api/rendezVous/new-rendezVous', formData);
      
      console.log('Rendez-vous créé avec succès :', response.data);
      setFormData({
        nom: '',
        prenom: '',
        motif: '',
        email: '',
        adresse: '',
        telephone: '',
        date: '',
        heure: ''
      });
    } catch (error) {
      console.error('Erreur lors de la création du rendez-vous :', error);
    }
  }; 
  return (
      <div className='PageDocteur1-Container' >
     <div className="Docteur1">
        <img src={PPdocteur1} alt="Profile" className="Profile-image" />
        <div>
       <p> Dr. Ali El Husseini <br/>
      Dentiste</p>
    </div>
      </div>

      <div className="content">
        <h1><strong>BIENVENUE</strong></h1>
        <p>Situés dans un plateau médical en plein centre ville de dakar, au 58 Bis, rue Jules Ferry,
           nous vous accueillons pour toutes interventions dentaires dans un environnement moderne et 
           confortable où vous pourrez trouver le meilleur de la technologie dentaire.
           <br/>
          Notre philosophie est d'être toujours à votre écoute pour assurer votre bien être et faire 
          de votre visite chez le dentiste un rendez-vous à la hauteur de vos attentes.
          <br/>
          Notre méthode consiste, dans un premier temps, à prendre le temps de vous connaître, d'apprécier 
          vos besoins et vos souhaits, pour ensuite pouvoir vous proposer un parcours de soins sur mesure où 
          qualité, esthétique et confort guideront chaque acte. L'utilisation de technologies innovantes est 
          pour vous l'assurance d'obtenir de meilleurs résultats.
          <br/>
          <br/>
             Votre sourire, notre priorité !
        </p>
         <img src={imagepageDentiste} alt="Profile" className="ImageDillustratif" /> 

            
        <form className="rendezVous-form" onSubmit={handleSubmit}>
        <h1> <img src={logo} alt="Logo de PSS"  />   Prendre un rendez-vous  </h1>
         
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} />
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} />
          <input type="text" name="motif" placeholder="Motif" value={formData.motif} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="adresse" placeholder="Adresse" value={formData.adresse} onChange={handleChange} />
          <input type="tel" name="telephone" placeholder="Numéro de téléphone" value={formData.telephone} onChange={handleChange} />
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="time" name="heure" value={formData.heure} onChange={handleChange} />
          <button type="submit" >VALIDATION </button>
        </form>

      </div>
      
       
     


      </div> 
        
   
  ) 
}

export default PageDocteur1;
