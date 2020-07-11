import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanets = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="display-4">
				{!!store.planets && (
					<>
						<div className="container">
							<div className="psup">
								<img src="https://placehold.it/800x600" alt="img 800x600" className="imgSingle" />
								<div>
									<h1 className="tittleSingle">
										{store.planets.results[props.match.params.theid].name}
									</h1>
									<p className="descrip">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et feugiat
										felis, et tristique odio. Integer a aliquet ante. Maecenas molestie iaculis
										justo et tempor. Donec sed velit non enim elementum sodales a at nibh. In id
										nisl orci. Phasellus ut lobortis ligula. Integer diam nunc, tincidunt ut metus
										nec.
									</p>
								</div>
							</div>
							<hr className="my-4 color" />
							<div className="pinf">
								<div className="info">
									<table className="table table-borderless tittleSingle">
										<thead>
											<tr>
												<th scope="col">Name </th>
												<th scope="col">Climate </th>
												<th scope="col">Diameter </th>
												<th scope="col">Gravity </th>
												<th scope="col">Orbital Period </th>
												<th scope="col">Population</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{store.planets.results[props.match.params.theid].name}</td>
												<td>{store.planets.results[props.match.params.theid].climate} </td>
												<td>{store.planets.results[props.match.params.theid].diameter}</td>
												<td>{store.planets.results[props.match.params.theid].gravity}</td>
												<td>
													{store.planets.results[props.match.params.theid].orbital_period}{" "}
												</td>
												<td>{store.planets.results[props.match.params.theid].population}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</>
				)}
			</div>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanets.propTypes = {
	match: PropTypes.object
};
