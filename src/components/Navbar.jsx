import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const deleteFavoriteL = (favc) => {
		dispatch({ type: 'delete_favoriteL', payload: favc })
	}

	const deleteFavoriteC = (favl) => {
		dispatch({ type: 'delete_favoriteC', payload: favl })
	}


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/1280px-The_Simpsons_yellow_logo.svg.png" height="90px" alt="" />
				</Link>
				<div className="ml-auto">
					<div className="btn-group drop-start">
						<button type="button" className="btn btn-warning dropdown-toggle montserrat" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							Favoritos:  <strong>{Number(store.favoritosC.length) + Number(store.favoritosL.length)}</strong>
						</button>
						<ul className="dropdown-menu dropdown-menu-end montserrat" >
							<h6 className="dropdown-header">Characters</h6>
							{
								store.favoritosC.length === 0 ?
									(
										<li className="dropdown-item">

											<p>Add a favorite.</p>
										</li>
									) : (
										store.favoritosC.map(favc => (

											<li key={favc.id + "c"} className="dropdown-item d-flex justify-content-between">

												<Link to={`/character/${favc.id}`}>
													<p>{favc.name}</p>
												</Link>
												<p className="thrash" onClick={() => { deleteFavoriteC(favc) }}>🗑️</p>
											</li>


										))
									)
							}
							<li><hr className="dropdown-divider" /></li>
							<h6 className="dropdown-header">Locations</h6>
							{
								store.favoritosL.length === 0 ?
									(
										<li className="dropdown-item">

											<p>Add a favorite.</p>
										</li>
									) : (
										store.favoritosL.map(favl => (

											<li key={favl.id + "l"} className="dropdown-item d-flex justify-content-between">

												<Link to={`/location/${favl.id}`}>
													<p>{favl.name}</p>
												</Link>
												<p className="thrash" onClick={() => { deleteFavoriteL(favl) }}>🗑️</p>
											</li>


										))
									)
							}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};