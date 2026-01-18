import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const CardLocations = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()
    const [favorite, setFavorite] = useState(false)


    const addFavorite = () => {

        setFavorite(!favorite)
        console.log(favorite);

        if (favorite === false) {
            dispatch({ type: 'add_favoriteL', payload: location })

        } else if (favorite === true) {
            dispatch({ type: 'delete_favoriteL', payload: location })
            return;
        }

    }
    const isFavoriteL = store.favoritosL.some(fav =>  Number(fav.id) === Number(location.id) )


    return (
        <>
            <div className="card border-warning mb-3"  >

                <img src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`} className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.town}</p>
                    <p className="card-text">{location.use}</p>
                    <Link to={`/location/${location.id}`}>
                        <button className="btn btn-learn btn-warning">
                            Learn more.
                        </button>
                    </Link>
                     <button
                        id={location.id}
                        onClick={() => { addFavorite() }}
                        className={
                            isFavoriteL ?
                                "button clicked"
                                : "button"
                        }
                     > <i className={
                        isFavoriteL ?
                            "fa-solid fa-star star-clicked"
                            : "fa-solid fa-star"}
                    ></i>
                    </button>


                </div>
            </div>
        </>

    );
}