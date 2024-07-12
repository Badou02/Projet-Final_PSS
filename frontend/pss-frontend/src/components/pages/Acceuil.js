import React, { useState, useEffect } from "react";
import illustrationimg from "../../components/img/imagepss.jpg";
import DiabeteTechnologie from "../../components/img/DiabeteTechnologie.jpg";
import HealthBlog from "../../components/img/HealthBlog.png";
import PHARMA1 from "../../components/img/AimeCesaire.jpg"; 
import PHARMA2 from "../../components/img/Pharmacie-guiguon.jpg"; 
import PHARMA3 from "../../components/img/pharmacie-pointE.jpg"; 
import PHARMA4 from "../../components/img/PharmacieSonatel1.jpg"; 
import PHARMA5 from "../../components/img/PharmacieNelsonMandela.jpg"
import PHARMA6 from "../../components/img/PharmacieDesMamelles.jpg"
import docteur1 from "../../components/img/DocteurAliElHusseini.jpg"; 
import docteur2 from "../../components/img/PrIdrissaBa.jpg"; 
import docteur3 from "../../components/img/khadysy.png";
import docteur4 from "../../components/img/ImgDocteur1.png"; 
import '../../components/Styles/Acceuil.css'; 
import logo from "../../components/img/PSS.png";
import DocteurCard from "../../components/pages/DocteurCard";
import PharmacieCard from "../../components/pages/PharmacieCard";


const pharmaciesEnGarde = [
  {
    id: 1,
    nom: "Pharmacie Aime cessair",
    image: PHARMA1,
    lienPlus: "/pharmacie1",
  },
  {
    id: 2,
    nom: "Pharmacie guiguon",
    image: PHARMA2,
    lienPlus: "/pharmacie2",
  },
  {
      id: 3,
      nom: "Pharmacie PointE",
      image: PHARMA3,
      lienPlus: "/pharmacie2",
    },
    {
      id: 4,
      nom: "Pharmacie Sonatel 1",
      image: PHARMA4,
      lienPlus: "/pharmacie2",
    },
    {
      id: 5,
      nom: 'Pharmacie  NelsonMandela',
      image: PHARMA5,
      lienPlus: '/pharmacie2',
    },
    {
      id: 6,
      nom: 'Pharmacie PointE',
      image: PHARMA6,
      lienPlus: '/pharmacie2',
    },
];
const DocteurDispo = [
  {
    id: 1,
    prenom:'Dr. Ali  ',
    nom: 'El Husseini',
    image: docteur1,
    profession:'Dentiste',
    lienPlus:'PageDocteur1',
    
  },
  {
    id: 2,
    prenom:'Pr. Idrissa ',
    nom: 'BA',
    image: docteur2,
    profession:'Pédiatre',
    lienPlus:'pageDocteur2',
    
  },
  {
      id: 3,
      prenom:'Khady',
      nom: 'sy',
      image: docteur3,
      profession:'Radio-Physicienne',
       lienPlus:'Docteur3',
     
    },
    {
      id: 4,
      prenom:' Dr.Moustapha ',
      nom: 'Cissé',
      image: docteur4,
      profession:'Radiologue',
       lienPlus:'Docteur3',
     
    },
    {
      id: 4,
      prenom:' Dr Talal  ',
      nom: 'ATTYE',
      image: docteur4,
      profession:'Ophtalmologue',
       lienPlus:'Docteur3',
     
    }
  ];
    
const Acceuil = () =>{
  const [isScrolling, setIsScrolling] = useState(true);

   
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


    return  (
      
      <div className="container">
    <main>
    <div className="text-content">
      <h1><strong>Bienvenue sur PSS <br/> 
      Plateforme de <br/> 
      Services de Santé </strong></h1>
      <p>Chez PSS, notre mission est de faciliter<br/> 
         votre accès à des soins de santé de qualité.<br/> 
         Nous vous mettons en relation avec <br/> 
         des professionnels de santé qualifiés,<br/> 
         vous permettant de prendre des rendez-vous <br/> 
         en ligne en quelques clics et d'accéder à<br/> 
         des informations médicales fiables et actualisées.</p>
         </div> 
         <div className="img">
           <img src={illustrationimg} alt=" Présentation" className="animatedImage"/>
           <img src={logo} alt=" Présentation" className="animatedImage"/>
</div>

 </main>
 <br/> 
    <h1 className="pharmacieGarde">Consulter les pharmacies qui sont en garde </h1> <br/> 
    <br/> 
    
   
    <div className="pharmaciesList">
        {pharmaciesEnGarde.map((pharmacie) => (
            <PharmacieCard key={pharmacie.id} {...pharmacie} />
        ))}
    </div>
       <br/>

       <div className="divBlog">
  <div className="blogImageContainer">
    <img className="blogImage1" src={DiabeteTechnologie} alt="illustratif1" />
    <div className="overlay">
      <p>3 FAÇONS DONT LA TECHNOLOGIE A AMÉLIORÉ LES SOINS POUR LES DIABÉTIQUES.....</p>
      <a href="/BlogDiabete">Lire la suite</a>
    </div>
  </div>
  <img className="blogImage2" src={HealthBlog} alt="illustratif2" />
</div>
      <br/>

      <h1 className="DocteurDispo">Voir les médecins disponibles</h1>
      <br/>
      <div
        className={`ListDocteurs ${isScrolling ? 'scroll' : ''}`}
        onMouseEnter={() => setIsScrolling(false)}
        onMouseLeave={() => setIsScrolling(true)}
      >
        {DocteurDispo.map((docteur) => (
          <DocteurCard key={docteur.id} {...docteur} />
        ))}
      </div>

      

      </div>
    
 
   );
}

export default Acceuil;