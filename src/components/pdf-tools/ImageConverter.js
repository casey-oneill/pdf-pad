import { Component } from "react";
import { Button, Container, Form, Image, Row } from "react-bootstrap";
import { PDFDocument } from "pdf-lib";
import Loader from "../Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PDFViewer from "./PDFViewer";

class ImageConverter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			imageUrl: null,
			pdfBytes: null,
			isLoading: false,
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.imageType !== this.props.imageType) {
			// reset state
			this.setState({
				imageUrl: null,
				pdfBytes: null,
				isLoading: false,
				error: null,
			})
		}
	}

	async convertImage(imageUrl) {
		const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());

		const pdfDoc = await PDFDocument.create();

		let image;
		if (this.props.imageType === "png") {
			image = await pdfDoc.embedPng(imageBytes);
		} else if (this.props.imageType === "jpg") {
			image = await pdfDoc.embedJpg(imageBytes);
		}

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
		const imageTypeText = String(this.props.imageType).toUpperCase();
		return (
			<Container fluid className="py-5">
				<h1 className="display-6">Convert {imageTypeText} to PDF</h1>
				<Row>
					<Form.Group controlId="formFile" className="mb-3" onChange={this.handleChange}>
						<Form.Label>Select {imageTypeText} file to convert to PDF</Form.Label>
						<Form.Control type="file" />
					</Form.Group>
					{imageUrl === null ? null : <Image src={imageUrl} thumbnail />}
				</Row>
				<Button variant="primary" disabled={imageUrl === null} onClick={this.handleButtonPress}><FontAwesomeIcon icon={solid("repeat")} /> Convert</Button>
				{isLoading ? <Loader /> : null}
				<PDFViewer pdfBytes={pdfBytes} />
			</Container>
		);
	}
}

export default ImageConverter;
