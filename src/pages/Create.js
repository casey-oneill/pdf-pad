import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import PDFViewer from "../components/pdf-tools/PDFViewer";

class Create extends Component {
	render() {
		return (
			<div className="create">
				<div className="create-header bg-light py-5">
					<div className="create-title text-center pb-5">
						<h1 className="display-4">Create PDF</h1>
						<p className="text-muted lead">Create a new PDF document from existing files.</p>
					</div>
					<div className="create-content">
						<Container className="py-3">
							<Row className="justify-content-center">
								<Col xs="4">
									<Card className="text-center">
										<Button as={Link} variant="outline-primary" to="/create/png-converter">
											<Card.Body>
												<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
												<Card.Text>PNG to PDF</Card.Text>
											</Card.Body>
										</Button>
									</Card>
								</Col>
								<Col xs="4">
									<Card className="text-center">
										<Button as={Link} variant="outline-primary" to="/create/jpg-converter">
											<Card.Body>
												<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
												<Card.Text>JPG to PDF</Card.Text>
											</Card.Body>
										</Button>
									</Card>
								</Col>
								<Col xs="4">
									<Card className="text-center">
										<Button as={Link} variant="outline-primary" to="/create/pdf-merger">
											<Card.Body>
												<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
												<Card.Text>Merge PDFs</Card.Text>
											</Card.Body>
										</Button>
									</Card>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<Container>
					<Outlet />
				</Container>
			</div >
		);
	}
}

export default Create;
