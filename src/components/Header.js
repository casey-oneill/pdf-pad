import { Component } from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/">PDF-PAD</Navbar.Brand>
					<Nav>
						<NavDropdown title="Tools" id="nav-dropdown">
							<NavDropdown.Item as={Link} to="/create">Create</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/edit">Edit</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={Link} to="help">Help</Nav.Link>
						<Nav.Link href="https://github.com/casey-oneill/pdf-pad">GitHub</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}

export default Header;
