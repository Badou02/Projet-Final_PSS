import React from "react";
import Blog1 from "../../components/pages/BlogCard1";
import Blog2 from "../../components/pages/BlogCard2";
import Blog3 from "../../components/pages/BlogCard3";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../components/Styles/AllBlog.css'; 
const Blog = () => {
	return (
		<Container className="blog-container">
			<Row className="justify-content-between">
				<Col md={8} className="blog-card">
					<Blog1 />
				</Col>
				<Col md={2} className="blog-recent-posts">
					<Card>
						<Card.Body>
							<Card.Title className="recent-posts-title">Recent Posts</Card.Title>
							 <ul className="recent-posts-list">
								<li><a href="/BlogDiabete">Des technologies nouvelles pour un quotidien plus confortable</a></li><br/>
								   <br/>
								<li><a href="#Blog2">La solution miracle pour être en pleine santé ?</a></li><br/>
								<br/>
								<li><a href="#Blog3">5 bons réflexes pour bien dormir</a></li>

							</ul> 
						</Card.Body>
					</Card>
				</Col>
				<Col md={8} className="blog-card">
					<Blog2 />
				</Col>
				<Col md={8} className="blog-card">
					<Blog3 />
				</Col>
				
			</Row>
		</Container>
	);
};

export default Blog;


