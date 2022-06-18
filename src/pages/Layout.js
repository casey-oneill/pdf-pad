import { Component } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
	render() {
		return (
			<>
				<Header />
				<Container className="py-4">
					<Outlet />
				</Container>
				<Footer />
			</>
		);
	}
}

export default Layout;