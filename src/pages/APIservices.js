import storeReducer from "../store"

export const getPersonajes = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`)
    const data = await response.json()  

    dispatch({ type: 'get_personajes', payload: data.results })
}

export const getPersonaje = async (id, dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
    const data = await response.json()
    
    dispatch({type: 'get_personaje', payload: data})
    
}

export const getLocations = async (dispatch) => {
    const response = await fetch (`https://thesimpsonsapi.com/api/locations`)
    const data = await response.json()
    
    dispatch({ type: 'get_locations', payload: data.results})
}

export const getLocation = async (id, dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/locations/${id}`)
     const data = await response.json()

     dispatch({type: 'get_location', payload: data})
}