import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Component } from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
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
						<NavDropdown title="Tools" id="nav-dropdown">
							<NavDropdown.Item as={Link} to="/create">Create</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/edit">Edit</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="help">Help</Nav.Link>
						<Nav.Link href="https://github.com/casey-oneill/pdf-pad"><FontAwesomeIcon icon={brands("github")} /> GitHub</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}

export default Header;
