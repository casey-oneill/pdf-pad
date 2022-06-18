import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

class Edit extends Component {

	render() {
		return (
			<div className="edit">
				<div className="edit-title text-center py-5">
					<h1 className="display-4">Edit PDF</h1>
					<p className="text-muted lead">Make changes to an existing PDF document.</p>
				</div>
				<div className="edit-content">
					<Container fluid className="py-5">
						<Row>
							<Col>
								<Card className="text-center">
									<Card.Body as={Button} variant="outline-primary">
										<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
										<Card.Text>Images to PDF</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card className="text-center">
									<Card.Body as={Button} variant="outline-primary">
										<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
										<Card.Text>Images to PDF</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col>
								<Card className="text-center">
									<Card.Body as={Button} variant="outline-primary">
										<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
										<Card.Text>Images to PDF</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default Edit;
