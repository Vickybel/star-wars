import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{!!store.favs &&
				store.favs.map(item => {
					return (
						<div className="favs" key="i">
							<h5 key="i">{item}</h5>
							<button className="fas fa-trash-alt trash" onClick={() => actions.borrarFavs(id)} />
							<br />
						</div>
					);
				})}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
