import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import Loader from '../Loader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

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
		const pdfBytes = this.props.pdfBytes;

		if (pdfBytes === null || pdfBytes === undefined) {
			return null;
		} else {
			return (
				<>
					<Container fluid className="bg-secondary my-3">
						<Row className="justify-content-between bg-dark shadow p-3">
							<Col className="text-left">
								<ButtonGroup aria-label="pdf-pagination">
									<Button variant="light border" disabled={pageNumber <= 1} onClick={this.previousPage}><FontAwesomeIcon icon={solid("arrow-left")} /></Button>
									<Button variant="light border" disabled={pageNumber >= numberPages} onClick={this.nextPage}><FontAwesomeIcon icon={solid("arrow-right")} /></Button>
								</ButtonGroup>
							</Col>
							<Col className="text-center">
								<div className="text-light py-1">{pageNumber} / {numberPages}</div>
							</Col>
							<Col className="text-end">
								<a href={`data:application/pdf;base64,${pdfBytes}`} download="file.pdf" className="text-light"><FontAwesomeIcon icon={solid("download")} /></a>
							</Col>
						</Row>
						<Document file={`data:application/pdf;base64,${pdfBytes}`} onLoadSuccess={this.onDocumentLoadSuccess} loading={<Loader />}>
							<Page pageNumber={pageNumber} loading={<Loader />} renderAnnotationLayer={false} renderTextLayer={false} className="p-5" />
						</Document>
					</Container>
				</>
			);
		}
	}
}

export default PDFViewer;
