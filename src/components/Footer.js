import { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
	render() {
		return (
			<footer className="mt-auto">
				<Container className="py-3 text-center sticky-bottom">
					&copy; <a href="https://casey-oneill.github.io">Casey O'Neill</a> 2022
				</Container>
			</footer>
		);
	}
}

export default Footer;
