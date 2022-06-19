import { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
	render() {
		return (
			<footer className="mt-auto">
				<Container className="py-3 text-center text-muted sticky-bottom">
					<p><b>Created by <a href="https://casey-oneill.github.io">Casey O'Neill</a> 2022.</b></p>
					<p>Distributed under the <a href="https://github.com/casey-oneill/pdf-pad/blob/main/LICENSE.md">MIT</a> license.</p>
					<p>Powered by <a href="https://pdf-lib.js.org">PDF-LIB</a> and <a href="https://github.com/wojtekmaj/react-pdf">React-PDF</a>.</p>
				</Container>
			</footer>
		);
	}
}

export default Footer;
