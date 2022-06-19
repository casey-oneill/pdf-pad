import { Component } from "react";
import { Button, Col, Container, ListGroup, ListGroupItem, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="home-title text-center py-5">
					<h1 className="display-4">PDF-PAD</h1>
					<p className="text-muted lead">Create and modify PDF documents online.</p>
				</div>
				<div className="home-content">
					<Container fluid>
						<Row>
							<Col xs="6">
								<Stack gap={4}>
									<h1 className="display-6">Get started</h1>
									<Button variant="outline-primary" className="w-25" as={Link} to="create">Create PDF</Button>
									<Button variant="outline-primary" className="w-25" as={Link} to="edit">Edit PDF</Button>
								</Stack>
							</Col>
						</Row>
						<Row className="justify-content-end pt-5">
							<Col xs="6">
								<h1 className="display-6">Features</h1>
								<p>A free and open source web application powered by the <a href="https://pdf-lib.js.org">PDF-LIB</a> JavaScript PDF library.</p>
								<ListGroup className="list-group-flush">
									<ListGroupItem className="lead px-0">Create and Modify</ListGroupItem>
									<ListGroupItem className="lead px-0">Split and Merge</ListGroupItem>
									<ListGroupItem className="lead px-0">Fill Forms</ListGroupItem>
								</ListGroup>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default Home;
