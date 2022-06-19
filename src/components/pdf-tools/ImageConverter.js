import { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Image, Row } from "react-bootstrap";
import { PDFDocument } from "pdf-lib";
import PDFViewer from "./PDFViewer";
import Loader from "../Loader";

class ImageConverter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageUrl: null,
			pdfBytes: null,
			isLoading: false,
		}
	}

	async convertImage(imageUrl) {
		const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

		const pdfDoc = await PDFDocument.create();

		const image = await pdfDoc.embedPng(imageBytes);
		const imageDims = image.scale(0.5);

		const page = pdfDoc.addPage();

		page.drawImage(image, {
			x: page.getWidth() / 2 - imageDims.width / 2,
			y: page.getHeight() / 2 - imageDims.height / 2 + 250,
			width: imageDims.width,
			height: imageDims.height,
		});

		const pdfBytes = await pdfDoc.saveAsBase64();

		this.setState({
			pdfBytes: pdfBytes,
			isLoading: false,
		});
	}

	handleButtonPress = () => {
		const imageUrl = this.state.imageUrl;

		if (imageUrl !== null) {
			this.setState({
				isLoading: true,
			});
			this.convertImage(imageUrl);
		}
	}

	handleChange = (event) => {
		this.setState({
			imageUrl: URL.createObjectURL(event.target.files[0]),
		});
	}

	render() {
		const { imageUrl, pdfBytes, isLoading } = this.state;
		return (
			<Container fluid className="py-3">
				<Row>
					<h1 className="display-6">Convert Image to PDF</h1>
				</Row>
				{imageUrl === null ? null : <Image src={imageUrl} thumbnail />}
				<Row>
					<Form.Group controlId="formFile" className="mb-3" onChange={this.handleChange}>
						<Form.Label>Select image file to convert to PDF</Form.Label>
						<Form.Control type="file" />
					</Form.Group>
				</Row>
				<Button variant="primary" disabled={imageUrl === null} onClick={this.handleButtonPress}>Convert</Button>
				{isLoading ? <Loader /> : null}
				{pdfBytes === null ? null : <a href={`data:application/pdf;base64,${pdfBytes}`} download="file.pdf"><Button variant="primary">Download</Button></a>}
			</Container>
		);
	}
}

export default ImageConverter;
