import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="display-4">
				{!!store.characters && (
					<>
						<div className="container">
							<div className="psup">
								<img src="https://placehold.it/800x600" alt="img 800x600" className="imgSingle" />
								<div>
									<h1 className="tittleSingle">
										{store.characters.results[props.match.params.theid].name}
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
												<th scope="col">Birth Year </th>
												<th scope="col">Gender </th>
												<th scope="col">Height </th>
												<th scope="col">Skin Color </th>
												<th scope="col">Eye Color</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>{store.characters.results[props.match.params.theid].name}</td>
												<td>
													{store.characters.results[props.match.params.theid].birth_year}{" "}
												</td>
												<td>{store.characters.results[props.match.params.theid].gender}</td>
												<td>{store.characters.results[props.match.params.theid].height}</td>
												<td>
													{store.characters.results[props.match.params.theid].skin_color}{" "}
												</td>
												<td>{store.characters.results[props.match.params.theid].eye_color}</td>
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

Single.propTypes = {
	match: PropTypes.object
};
