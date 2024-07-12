import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../components/Styles/ConsultationDemande.css'; 
const ConsultRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5007/api/rendezVous/All-rendezVous ');
        setRequests(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des demandes de rendez-vous :', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className='ConsultationDemande'>
      <h2>Demandes de rendez-vous</h2>
      <ul>
        {requests.map((request) => (
          <li key={request._id}>
            {request.nom}  <br/> 
            {request.prenom} <br/> 
            {request.motif} <br/> 
            {request.adresse}<br/> 
            {request.email}<br/> 
            {request.telephone}<br/> 
            {request.date} à {request.heure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultRequests;
