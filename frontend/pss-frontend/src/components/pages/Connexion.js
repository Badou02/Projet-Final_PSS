import React,{ useState }from "react";
import { useNavigate } from 'react-router-dom'; 
import imgInscription from "../../components/img/imgInscription.png"; 
import logo from "../../components/img/PSS.png"; 
import '../../components/Styles/Connexion.css'; 
// import { Link } from "react-router-dom";
import axios from 'axios';
const Connexion = () =>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate(); // Utiliser useNavigate pour la redirection
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5007/api/user/signin', {
              email,
              password
          });
          console.log('Réponse du serveur:', response.data);
          navigate('/Docteur1');
      } catch (error) {
          console.error('Erreur lors de la connexion:', error);
      }
  };
    return (
     <div className="connexion-container">

          <form className="connexion-form"  onSubmit={handleSubmit}> 
            
               <h1> <img src={logo} alt="Logo de PSS" className="connexion-logo" /></h1>
               
           <div>     
          <label >  
            Email:<br/>
          <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label> 
          </div>
          <div>
          
          <label>
            Mot de passe :<br/>
          <input
              type="password"
              placeholder="Enter your Password"
              name="motdepasse"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </label>
        <br/>
        <br/>
          </div> 
          <div>   <button  type="submit" className="connexion-button" onClick={handleSubmit}>Connexion</button></div>
       </form>



         <div className="inscriptions">
         <p>Vous êtes un profesionnel de santé et  vous voulez proposer vos services </p>
         <img src={imgInscription} alt="imgInscription" className="imgInscription" /><br/>
         <br/>
        
        <div className="linkinscriptions"> 
             <a  href="/Inscriptions" > Inscrivez-Vous </a>
             </div>
         </div>
       </div> 

      
    )
}
export default Connexion;