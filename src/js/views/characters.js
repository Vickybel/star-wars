import React, { useContext } from "react";
import Cards from "./cards_characters";
import "../../styles/index.scss";
import { Context } from "../store/appContext";

const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container galery">
				<Cards />
				<button className="btn btn-outline-primary previous" onClick={e => actions.previousCharacters()}>
					previous
				</button>
				<button className="btn btn-outline-primary next" onClick={e => actions.nextCharacters()}>
					next
				</button>
			</div>
		</>
	);
};

export default Characters;
