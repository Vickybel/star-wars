import React, { useContext } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Cards = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!!store.characters &&
				store.characters.results.map((item, index) => {
					const nombre = item.name;
					return (
						<>
							<div className="card micard" key="i">
								<img src="https://placehold.it/300x150" className="card-img-top cardimg" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Gender: {item.gender}
										<br />
										Hair color: {item.hair_color}
										<br />
										Eye color: {item.eye_color}
									</p>
									<Link to={"/single/" + index}>
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
export default Cards;
