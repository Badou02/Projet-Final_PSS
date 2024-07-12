import React from 'react';
import { Card } from "react-bootstrap";
import '../../components/Styles/Blog.css'; 
import technoAndDiabete from "../../components/img/technoAndDiabete.jpg";
const Blog1 = () => {
	return (
		<Card className="card">
			<Card.Img
				variant="top"
				src= {technoAndDiabete}
				width={100}
				height={250}
				className="card-img-top"
			/>
			<Card.Body className="card-body">
				<Card.Title className="card-title">Diabète : Des technologies nouvelles pour un quotidien plus confortable </Card.Title>
				<Card.Text className="card-text">
				Le temps paraît loin où il leur fallait se piquer le bout du doigt six fois par jour pour recueillir une goutte de sang, mesurer leur glycémie et s’injecter une quantité bien précise d’insuline. Les nouvelles technologies ont simplifié ces tâches avec des innovations de rupture : dans un premier temps, les pompes à insuline, remboursées en 2000 ; puis, plus récemment, les capteurs de mesure du glucose en continu, pris en charge par l’Assurance maladie en 2017....
				</Card.Text>
				<a href="/BlogDiabete" className="bouton-blog">Lire la suite</a> 
			</Card.Body>
		</Card>
	);
};

export default Blog1;
