import React from 'react'
import { Card } from "react-bootstrap";
import '../../components/Styles/Blog.css'; 
import  dormir from "../../components/img/dormir.jpg";
function Blog3() {
  return (
    <Card className="card">
    <Card.Img
      variant="top"
      src={dormir}
      width={20}
      height={250}
      className="card-img-top"
    />
    <Card.Body className="card-body">
      <Card.Title className="card-title">5 bons réflexes pour bien dormir</Card.Title>
      <Card.Text className="card-text">
      En plus d’influencer votre humeur, le sommeil est crucial pour de nombreuses fonctions biologiques. 
      Bien dormir est donc un enjeu de taille pour votre santé. En adoptant quelques réflexes,
      vous pouvez maîtriser certains facteurs qui nuisent à la qualité de votre sommeil. 
      Et mieux dormir, même si vos nuits ne vous paraissent jamais assez longues, va vous changer la vie.
      </Card.Text>
      <a href="#Blog1" className="bouton-blog ">Lire la suite</a> 
    </Card.Body>
  </Card>
  )
}

export default Blog3
