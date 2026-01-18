import "./Home.css";

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { getPersonajes, getLocations } from "./APIservices.js";
import { Card } from "../components/Card.jsx";
import { CardLocations } from "../components/CardLocations.jsx"

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {
		getPersonajes(dispatch)
		getLocations(dispatch)

	}, [])



	return (

		<div className="container mt-5">
			<h1 className="text-center title-header montserrat">Characters.</h1>
			<div className="carousel carousel-personajes">
				{
					store.personajes.map(personaje => {
						return (
							<Card key={personaje.id} personaje={personaje} />
						)
					})
				}

			</div>
			<h2 className="text-center title-header montserrat mt-5">Locations.</h2>
			<div className="carousel carousel-locations">
				{
					store.locations.map(location => {
						return (
							<CardLocations key={location.id} location={location} />
						)
					})
				}


			</div>

		</div>
	);
}; 
