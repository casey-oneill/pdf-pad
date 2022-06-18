import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import PDFViewer from "../components/PDFViewer";

class Create extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pdfData: null,
		}
	}

	componentDidMount() {
		const { pdfData } = this.state;
		if (pdfData === null) {
			this.loadPdf();
		}
	}

	async loadPdf() {
		const pdfDoc = await PDFDocument.create()
		const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

		const page = pdfDoc.addPage()
		const { width, height } = page.getSize()
		const fontSize = 30
		page.drawText('Creating PDFs in JavaScript is awesome!', {
			x: 50,
			y: height - 4 * fontSize,
			size: fontSize,
			font: timesRomanFont,
			color: rgb(0, 0.53, 0.71),
		})

		const pdfBytes = await pdfDoc.saveAsBase64()

		this.setState({
			pdfData: pdfBytes,
		});
	}

	render() {
		const { pdfData } = this.state;

		return (
			<div className="create">
				<div className="create-title text-center py-5">
					<h1 className="display-4">Create PDF</h1>
					<p className="text-muted lead">Create a new PDF document from existing files.</p>
				</div>
				<PDFViewer file={`data:application/pdf;base64,${pdfData}`} />
				<div className="create-content">
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
			</div >
		);
	}
}

export default Create;
