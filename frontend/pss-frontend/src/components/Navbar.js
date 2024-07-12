import React,{useState} from 'react';
import { Link } from "react-router-dom";
import '../components/Styles/Navbar.css'; 
import logo from "../components/img/PSS.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import allData from './Datas/Alldatas';

const Navbar = () =>{
     
   const [menuOpen,setMenuOpen]=useState(false)
   const [searchTerm, setSearchTerm] = useState('');
   const [searchResults, setSearchResults] = useState([]);
   
   const handleSearch = (e) => {
    e.preventDefault();
    const results = allData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };


  
    return ( 
        
    <nav>
        <div className="logo-container">
        <Link to="/">   <img className="logo" src={logo} alt="Logo PSS" /></Link>
            </div>
            <div className="menu" onClick={() =>{
                setMenuOpen(!menuOpen);
            }}
            >
            <span></span>
            <span></span>
            <span></span>
            </div>
            <ul className="nav-links"  >
        <ul   className={menuOpen ? "open" :""}  >
           
            <li><Link to="/">Acceuil</Link></li>
            <li><Link  to="/AllBlog">Blog</Link></li>
            
            <li><Link  to="/Connexion">Connexion</Link></li>
            <li>
            <form className="search-form" onSubmit={handleSearch}>
              <div className="search-input-container">
                <FontAwesomeIcon icon={faSearch} className='icon-navbar' />
                <input 
                  type="text" 
                  placeholder="Rechercher..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                />
              </div>

              
              <button type="submit">Rechercher</button>
            </form>
            {searchResults.length > 0 && (
              <div className="search-results">
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index}>{result.type}: {result.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
       
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;