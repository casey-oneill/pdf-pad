import { Badge, Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import { Document, Outline, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

class PDFViewer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pageNumber: 1,
			numberPages: 0,
		}
	}

	onDocumentLoadSuccess = (data) => {
		this.setState({
			pageNumber: 1,
			numberPages: data._pdfInfo.numPages,
		});
	}

	onItemClick = (data) => {
		console.log(data)
	}

	changePage = (offset) => {
		const pageNumber = this.state.pageNumber;
		this.setState({
			pageNumber: pageNumber + offset,
		});
	}

	previousPage = (event) => {
		console.log(event)
		this.changePage(-1);

	}

	nextPage = (event) => {
		console.log(event)
		this.changePage(1);
	}

	render() {
		const { pageNumber, numberPages } = this.state;
		return (
			<>
				<Container fluid className="my-3">
					<Row className="justify-content-between">
						<Col>
							<ButtonGroup aria-label="pdf-pagination">
								<Button variant="primary" disabled={pageNumber <= 1} onClick={this.previousPage}>Prev</Button>
								<Button variant="primary" disabled={pageNumber >= numberPages} onClick={this.nextPage}>Next</Button>
							</ButtonGroup>
						</Col>
						<Col xs="2">
							<div className="bg-primary text-light rounded text-center py-1">Page {pageNumber} of {numberPages}</div>
						</Col>
					</Row>
				</Container>
				<Document file={this.props.file} onLoadSuccess={this.onDocumentLoadSuccess} className="shadow">
					<Page pageNumber={pageNumber} renderAnnotationLayer={false} renderTextLayer={false} className="bg-secondary" />
				</Document>
			</>
		);
	}
}

export default PDFViewer;
