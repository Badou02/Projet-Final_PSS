import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import  "./App.css";
import Navbar from "./components/Navbar";
import Acceuil from "./components/pages/Acceuil";
import AllBlog from "./components/pages/AllBlog";
import Connexion from "./components/pages/Connexion";
import Footer from  "./components/pages/Footer";
import Inscriptions from  "./components/pages/Inscriptions";
import Pharmacie1 from "./components/pages/Pharmacie1";
import Docteur1  from "./components/pages/Docteur1";
import PageDocteur1 from "./components/pages/PageDocteur1";
import BlogDiabete from "./components/pages/BlogDiabete";
import ConsultationDemande from "./components/pages/ConsultationDemande";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<Acceuil/>}/>
     <Route path="/AllBlog" element={<AllBlog/>}/>
     <Route path="/Connexion" element={<Connexion/>}/>
     <Route path="/Inscriptions" element={<Inscriptions/>} />
     <Route path="/Pharmacie1" element={<Pharmacie1/>} />
     <Route path="/Docteur1" element={<Docteur1/>} />
     <Route path="/PageDocteur1" element={<PageDocteur1/>} />
     <Route path="/BlogDiabete" element={<BlogDiabete/>} />
     <Route path="/ConsultationDemande" element={<ConsultationDemande/>} />
     </Routes>
     
     <Footer />
    </div>
  );
}

export default App;
