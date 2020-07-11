import React, { useContext } from "react";
import Cards from "./cards_planets";
import "../../styles/home.scss";
import CardsPlanets from "./cards_planets";
import { Context } from "../store/appContext";

const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container galery">
			<CardsPlanets />
			<button className="btn btn-outline-primary previous" onClick={e => actions.previousPlanets()}>
				previous
			</button>
			<button className="btn btn-outline-primary next" onClick={e => actions.nextPlanets()}>
				next
			</button>
		</div>
	);
};

export default Planets;
