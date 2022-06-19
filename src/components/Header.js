import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<Navbar bg="primary" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/">
						<FontAwesomeIcon icon={solid("note-sticky")} />{" "}
						PDF-PAD
					</Navbar.Brand>
					<Nav>
						<Nav.Link as={Link} to="/help">Help</Nav.Link>
						<Nav.Link href="https://github.com/casey-oneill/pdf-pad">GitHub</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}

export default Header;
