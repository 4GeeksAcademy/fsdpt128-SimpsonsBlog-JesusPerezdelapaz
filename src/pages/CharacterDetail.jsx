import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonaje } from "./APIservices";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "./CharacterDetail.css";

export const CharacterDetail = () => {

    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams()
    const [favorite, setFavorite] = useState(false)


    const addFavorite = () => {

        setFavorite(!favorite)


        if (favorite === false && isFavoriteC === false) {
            dispatch({ type: 'add_favoriteC', payload: store.personaje })

        } else if (favorite === true && isFavoriteC === true) {
            dispatch({ type: 'delete_favoriteC', payload: store.personaje })
            return;
        }

    }

    const isFavoriteC = store.favoritosC.some(fav => Number(fav.id) === Number(store.personaje.id))




    useEffect(() => {
        getPersonaje(id, dispatch)

    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="character-container ">
                    <div className="character-card ">
                        <div className="character-row">

                            <div className="character-image">
                                <img
                                    src={`https://cdn.thesimpsonsapi.com/1280/character/${store.personaje.id}.webp`}
                                    alt={store.personaje.name}
                                />
                            </div>

                            <div className="character-content">
                                <div className="character-title">
                                    <h2 className="character-name">{store.personaje.name}</h2>
                                    <button
                                        id={store.personaje.id}
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


                                <div className="character-meta">
                                    <p><strong>Age:</strong> {
                                        store.personaje.age ? store.personaje.age
                                            : "Unknown"
                                    }</p>
                                    <p><strong>Gender:</strong> {store.personaje.gender}</p>
                                    <p><strong>Occupation:</strong> {store.personaje.occupation}</p>
                                    <p><strong>Status:</strong> {store.personaje.status}</p>
                                </div>

                                <p className="character-description">
                                    {store.personaje.description}
                                </p>
                                <p><strong>Phrases:</strong></p>
                                <div className="character-phrase">
                                    {store.personaje.phrases
                                        ?.slice(0, 3)
                                        .map((phrase, index) => (
                                            <p key={index}>{phrase}</p>
                                        ))
                                    }
                                </div>




                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}