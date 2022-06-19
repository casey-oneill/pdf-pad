import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import PDFViewer from "../components/pdf-tools/PDFViewer";

class Create extends Component {
	render() {
		return (
			<div className="create">
				<div className="create-title text-center py-5">
					<h1 className="display-4">Create PDF</h1>
					<p className="text-muted lead">Create a new PDF document from existing files.</p>
				</div>
				<div className="create-content">
					<Container fluid className="py-3">
						<Row>
							<Col>
								<Card className="text-center">
									<Button as={Link} variant="outline-primary" to="/create/image-converter">
										<Card.Body>
											<Card.Title><FontAwesomeIcon icon={solid("repeat")} /></Card.Title>
											<Card.Text>Images to PDF</Card.Text>
										</Card.Body>
									</Button>
								</Card>
							</Col>
						</Row>
					</Container>
					<Outlet />
				</div>
			</div >
		);
	}
}

export default Create;
