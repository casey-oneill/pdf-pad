import { Component } from "react";
import { Container } from "react-bootstrap";

class Help extends Component {
	render() {
		return (
			<Container className="help py-5">
				<h2>Need Help?</h2>
				<p>
					Your question may already be answered. Please take a moment to look through the <a href="https://github.com/casey-oneill/pdf-pad/issues">GitHub issues</a> for this project before reaching out.
					If your question is not answered, please create a new <a href="https://github.com/casey-oneill/pdf-pad/issues/new/choose">issue</a> describing your problem.
				</p>
				<p>
					GitHub issues is preferred for answering questions, tracking bugs, and requesting new features. Direct forms of communication, for example, email, will be ignored.
				</p>
			</Container>
		);
	}
}

export default Help;
