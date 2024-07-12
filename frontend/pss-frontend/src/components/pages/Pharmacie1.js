import React from 'react';
import '../../components/Styles/Pharmacie1.css'; 
import Pharma1 from "../../components/img/AimeCesaire.jpg";
import ItinéraireAimecessaire from "../../components/img/ItinérairePharmacieAimecessaire.png";
function Pharmacie1() {

window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  return (
    <div className='Pharmacie1-contener'>
         <br/>
    <h1> Pharmacie en garde du 05/06/2024</h1>
    <br/>
    <img src={Pharma1} alt=" Présentation" className="Aimecessair"/><br/>
    <br/>
    <h2>Pharmacie  Aime Cessair</h2>
    <br/>
    <p>  Zone: FANN, POINT E ; <br/>
        Adresse: Fann Résidence BP 5609 ; <br/>
        Téléphone: (221) 33 825 44 23 </p>
        
        <h3>  Voir itinéraire </h3>
        <br/>
        <img src={ItinéraireAimecessaire} alt=" Présentation" className="ItinéraireAimecessaire"/><br/>
        <br/>
    </div>
  )
}

export default Pharmacie1;
