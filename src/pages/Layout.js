import { Component } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Layout extends Component {
	render() {
		return (
			<div className="d-flex flex-column min-vh-100">
				<Header />
				<Outlet />
				<Footer />
			</div>
		);
	}
}

export default Layout;