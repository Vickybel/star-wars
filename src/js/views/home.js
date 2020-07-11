import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import CardsPlanets from "./cards_planets";
import Cards from "./cards_characters";

export const Home = () => {
	return (
		<>
			<Link to="/characters">
				<span className="mb-0 h1 nombre">Characters</span>
			</Link>
			<div className="container vitrina">
				<div className="card-deck scroloso">
					<Cards />
				</div>
			</div>

			<Link to="/planets">
				<span className="mb-0 h1 nombre">Planets</span>
			</Link>
			<div className="container vitrina">
				<div className="card-deck scroloso">
					<CardsPlanets />
				</div>
				<br />
			</div>
		</>
	);
};
