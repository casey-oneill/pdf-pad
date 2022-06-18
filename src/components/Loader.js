import { Component } from "react";
import { Container, Spinner } from "react-bootstrap";

class Loader extends Component {
	render() {
		return (
			<Container fluid className="text-center">
				<Spinner animation="border" variant="primary" role="status" className="loader">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</Container>
		);
	}
}

export default Loader;
