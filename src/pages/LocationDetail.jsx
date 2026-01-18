import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "./LocationDetail.css";
import { useEffect, useState } from "react";
import { getLocation } from "./APIservices";

export const LocationDetail = () => {

    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [favorite, setFavorite] = useState(false)


    const addFavorite = () => {

        setFavorite(!favorite)


        if (favorite === false) {
            dispatch({ type: 'add_favoriteL', payload: store.location })

        } else if (favorite === true) {
            dispatch({ type: 'delete_favoriteL', payload: store.location })
            return;
        }

    }

    const isFavoriteC = store.favoritosL.some(fav => Number(fav.id) === Number(store.location.id))



    useEffect(() => {
        getLocation(id, dispatch)
    }, [])

    return (
        <div className="location-container">
            <div className="location-card">

                <div className="location-image">
                    <img
                        src={`https://cdn.thesimpsonsapi.com/500/location/${store.location.id}.webp`}
                        alt={store.location.name}
                    />
                </div>

                <div className="location-content">
                    <div className="location-title">
                        <h2 className="location-name">{store.location.name}</h2>
                        <button
                                        id={store.location.id}
                                        onClick={() => { addFavorite() }}
                                        className={
                                            isFavoriteC ?
                                                "button-fav clicked"
                                                : "button-fav"
                                        }
                                    >Favorite
                                        <i className={
                                            isFavoriteC ?
                                                "fa-solid fa-star star-clicked"
                                                : "fa-solid fa-star"}
                                        ></i>
                                    </button>
                    </div>
                    

                    <div className="location-meta">
                        <p><strong>Town:</strong> {
                            store.location.town ? store.location.town
                                : 'I guess it´s in Springfield but the API doesn´t have the information :('
                        }</p>
                        <p><strong>Use:</strong> {
                            store.location.use ? store.location.use
                                : 'I guess it has a use, but the API doesn´t know, and neither do i.'
                        }</p>
                    </div>
                </div>

            </div>
        </div>
    );
}