import { Component } from "react";
import { Container } from "react-bootstrap";

class Help extends Component {
	render() {
		return (
			<Container className="help py-5">
				<h2>Need Help?</h2>
				<p>
					Your question may already be answered. Please take a moment to look through our <a href="https://github.com/casey-oneill/pdf-pad/issues">GitHub issues</a> issues before contacting us.
					If your question is not answered, please create a new <a href="https://github.com/casey-oneill/pdf-pad/issues/new/choose">issue</a> describing your problem and we will do our best to respond.
				</p>
				<p>
					We prefer using GitHub issues to answer questions, track bugs, and request new features. Please do not contact the authors of this project directly.
				</p>
			</Container>
		);
	}
}

export default Help;
