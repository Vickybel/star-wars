import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../img/star_wars_logo.png";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={logo} className="card-img-top logo" alt="Start Wars Logo" />
				</span>
			</Link>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">
						Favorites <span>nlist</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
