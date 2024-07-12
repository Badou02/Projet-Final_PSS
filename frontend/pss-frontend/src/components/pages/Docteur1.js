import React,{ useState } from 'react';
import PPdocteur1 from "../../components/img/DocteurAliElHusseini.jpg"; 
import '../../components/Styles/Docteur1.css'; 
import { useLocation, useNavigate  } from 'react-router-dom';
const Docteur1 = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/connexion');
    
  };

  const handleBlogSubmit = () => {
    setBlogs([...blogs, newBlog]);
    setNewBlog('');
  };

  const handleBlogDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  const location = useLocation();
  const { user } = location.state || {};
 
  console.log('Données utilisateur reçues:', user); // Ajoutez cette ligne pour vérifier les données reçues

  return (
    <div className='Docteur1-Container' >
       {/* <h1>Bienvenue, {user ? user.prenom : "Utilisateur"}</h1> */}
     <aside className="sidebar">
        <img src={PPdocteur1} alt="Profile" className="profile-image" />
        <h2> {user ? user.prenom : ''}<br/>
              {user ? user.nom : ''}</h2>
        <p>{user ? user.profession : ''} </p>
        <hr className="separator" />
          <ul>
            <li><a href="/ConsultationDemande">Consulter les demandes</a></li>
             <br/>
            <li><a href="#update-profile"> Profil</a></li>
            <br/>
            <li><a href="/AllBlog"> Blog</a></li>
          </ul>
        

        <button onClick={handleLogout} className="logout-button">Déconnexion</button>
      </aside>
      <main className="content">
        <section id="write-blog">
          <h2>Rédiger un blog</h2>
          <textarea
            value={newBlog}
            onChange={(e) => setNewBlog(e.target.value)}
            placeholder="Écrire un nouveau blog..."
          />
          <button onClick={handleBlogSubmit}>Publier</button>
        </section>
        <section id="blogs">
          <h2>Mes Blogs</h2>
          <ul>
            {blogs.map((blog, index) => (
              <li key={index}>
                <p>{blog}</p>
                <button onClick={() => handleBlogDelete(index)}>Supprimer</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

    
export default Docteur1;
