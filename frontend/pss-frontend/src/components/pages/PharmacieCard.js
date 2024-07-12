import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Styles/PharmacieCard.css'; 

const PharmacieCard = ({ image, nom, lienPlus }) => {
  return (
    <div className="pharmacie">
      <img src={image} alt={nom} />
      <h3>{nom}</h3>
      <Link to={lienPlus}>
        <button>Voir plus</button>
      </Link>
    </div>
  );
};

export default PharmacieCard;
