import { Component } from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="home-title text-center">
					<h1 className="display-4">PDF-PAD</h1>
					<p className="text-muted lead">Create and modify PDF documents online.</p>
				</div>
				<div className="home-content">
					<Container fluid>
						<Row>
							<Col className="px-0">
								<Stack gap={4}>
									<h1 className="display-6">Get started</h1>
									<Button variant="outline-primary" className="w-25" as={Link} to="create">Create PDF</Button>
									<Button variant="outline-primary" className="w-25" as={Link} to="edit">Edit PDF</Button>
								</Stack>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default Home;
