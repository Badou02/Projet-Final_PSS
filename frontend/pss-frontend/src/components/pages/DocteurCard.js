import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Styles/DocteurCard.css'; 


const DocteurCard = ({ image, prenom, nom,profession,lienPlus}) => {
  return (
    <div className="docteur">
      <br/>
      <img src={image} alt={`${prenom} ${nom}`} /> 
      <br/>
      <div className= "LienButton">
      <br/>
    <Link to={lienPlus} >
   
     <button>
      <h3>{prenom} {nom}</h3>
      <h4>{profession}</h4>
    </button>
  </Link> 
   </div>
  </div>
  );
};

export default DocteurCard;
