import { Component } from "react";
import { Button, Container, Form, Row, Table } from "react-bootstrap";
import { PDFDocument } from "pdf-lib";
import Loader from "../Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PDFViewer from "./PDFViewer";

class PDFMerger extends Component {

	constructor(props) {
		super(props);
		this.state = {
			files: [],
			pdfBytes: null,
			isLoading: false,
		}
	}

	async mergePDF(files) {
		const pdfDoc = await PDFDocument.create();

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			console.log(file)
			const filePdfBytes = await fetch(file.url).then((res) => res.arrayBuffer());
			const filePdfDoc = await PDFDocument.load(filePdfBytes);
			const filePages = filePdfDoc.getPages();

			for (let j = 0; j < filePages.length; j++) {
				const [copiedPage] = await pdfDoc.copyPages(filePdfDoc, [j]);
				pdfDoc.addPage(copiedPage);
			}
		}

		const pdfBytes = await pdfDoc.saveAsBase64();
		this.setState({
			pdfBytes: pdfBytes,
			isLoading: false,
		});
	}

	handleButtonPress = () => {
		const files = this.state.files;

		if (files.length > 0) {
			this.setState({
				isLoading: true,
			});
			this.mergePDF(files);
		}
	}

	handleChange = (event) => {
		if (event.target.files[0] === undefined || event.target.files[0] === null) {
			return;
		}

		let files = this.state.files;
		files.push({
			name: event.target.files[0].name,
			url: URL.createObjectURL(event.target.files[0])
		});

		this.setState({
			files: files,
		});
	}

	removeItem = (event) => {
		const i = event.target.value;
		let files = this.state.files;
		files.splice(i, 1);
		this.setState({
			files: files,
		});
	}

	tableRows = () => {
		const files = this.state.files;
		if (files.length <= 0) {
			return null;
		}

		let rows = [];
		files.forEach((file, i) => {
			rows.push(
				<tr>
					<td>{i}</td>
					<td>{file.name}</td>
					<td>{file.url}</td>
					<td><Button variant="primary" value={i} onClick={this.removeItem}>Remove</Button></td>
				</tr>
			);
		});
		return rows;
	}

	render() {
		const { files, pdfBytes, isLoading } = this.state;
		return (
			<Container fluid className="py-5">
				<h1 className="display-6">Merge PDF files</h1>
				<Row>
					<Form.Group controlId="formFile" className="mb-3" onChange={this.handleChange}>
						<Form.Label>Select PDF files to merge</Form.Label>
						<Form.Control type="file" />
					</Form.Group>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>#</th>
								<th>File Name</th>
								<th>File Preview</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{this.tableRows()}
						</tbody>
					</Table>
				</Row>
				<Button variant="primary" disabled={files.length === 0} onClick={this.handleButtonPress}><FontAwesomeIcon icon={solid("repeat")} /> Convert</Button>
				{isLoading ? <Loader /> : null}
				<PDFViewer pdfBytes={pdfBytes} />
			</Container>
		);
	}
}

export default PDFMerger;
