import React from 'react'
import { Card } from "react-bootstrap";
import '../../components/Styles/Blog.css'; 
import  sportSanté from "../../components/img/sportSanté.jpg";
function Blog2() {
  return (
    <Card className="card">
			<Card.Img 
				variant="top"
				src={sportSanté}
				width={20}
				height={250}
				className="card-img-top"
			/>
			<Card.Body className="card-body">
				<Card.Title className="card-title" >La solution miracle pour être en pleine santé ?</Card.Title>
				<Card.Text className="card-text">
        Les effets du sport sur notre santé physique sont bien connus : 
        faire une activité physique régulière diminue le risque de développer de nombreuses maladies
         et nous permet de vivre plus longtemps...
				</Card.Text>
				<a href="#Blog1" className="bouton-blog ">Lire la suite</a> 
			</Card.Body>
		</Card>
  )
}

export default Blog2;
