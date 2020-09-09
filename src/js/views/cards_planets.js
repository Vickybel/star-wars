import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardsPlanets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.planets &&
				store.planets.results.map((item, index) => {
					const nombre = item.name;
					return (
						<>
							<div className="card micard" key="i">
								<img src="https://placehold.it/300x150" className="card-img-top cardimg" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Population: {item.population}
										<br />
										Terrain: {item.terrain}
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
									<Link to={"/singleplanets/" + index}>
										<button className="btn btn-primary">Learn more</button>
									</Link>

									<button
										className="btn btn-secundary heart"
										onClick={() => {
											const ejemplo = nombre;
											actions.enviarFavoritos(nombre);
										}}>
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						</>
					);
				})}
		</div>
	);
};
export default CardsPlanets;
