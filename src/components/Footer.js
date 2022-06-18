import { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
	render() {
		return (
			<Container className="py-3 text-center">
				&copy; <a href="https://casey-oneill.github.io">Casey O'Neill</a> 2022
			</Container>
		);
	}
}

export default Footer;
