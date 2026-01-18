import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Card = ({ personaje }) => {

    const { store, dispatch } = useGlobalReducer()
    const [favorite, setFavorite] = useState(false)
    const [selectedFavorite, setSelectedFavorite] = useState(store.favoritosC)

    const addFavorite = () => {

        setFavorite(!favorite)
        

        if (favorite === false && isFavoriteC === false) {
            dispatch({ type: 'add_favoriteC', payload: personaje })

        } else if (favorite === true && isFavoriteC === true) {
            dispatch({ type: 'delete_favoriteC', payload: personaje })
            return;
        }

    }

    const isFavoriteC = store.favoritosC.some(fav =>  Number(fav.id) === Number(personaje.id) )
 
    
    



    useEffect(() => {
        // setFavorite(false)

    }, [])

    return (
        <>

            <div className="card border-warning mb-3"  >

                <img src={`https://cdn.thesimpsonsapi.com/500/character/${personaje.id}.webp`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">{personaje.gender}</p>
                    <p className="card-text">{personaje.occupation}</p>
                    <Link to={`/character/${personaje.id}`}>
                        <button className="btn btn-learn btn-warning">
                            Learn more.
                        </button>
                    </Link>
                    <button
                        id={personaje.id}
                        onClick={() => { addFavorite() }}
                        className={
                            isFavoriteC ?
                                "button clicked"
                                : "button"
                        }
                    > <i className={
                        isFavoriteC ?
                            "fa-solid fa-star star-clicked"
                            : "fa-solid fa-star"}
                    ></i>
                    </button>

                </div>
            </div>


        </>
    )
}