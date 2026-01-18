export const initialStore = () => {
  return {
    personaje: {},
    personajes: [],
    favoritosC: [],
    favoritosL:[],
    locations: [],
    location: {}

  }
}

export default function storeReducer(store, action = {}) {
switch (action.type) {

    case 'get_personajes':
      return {
        ...store,
        personajes: action.payload
      };

    case 'get_personaje':
      return {
        ...store,
        personaje: action.payload
      };

    case 'get_locations':
      return {
        ...store,
        locations: action.payload
      };

    case 'get_location':
      return {
        ...store,
        location: action.payload
      };

   case 'add_favoriteL':
      const location = action.payload
      return {
        ...store,
        favoritosL: [...store.favoritosL, location]

      };

    case 'delete_favoriteL':
      const locationToDelete = action.payload
      return {
        ...store,
        favoritosL: store.favoritosL.filter(fav => fav.id !== locationToDelete.id)
      };

    case 'add_favoriteC':
      const character = action.payload
      return {
        ...store,
        favoritosC: [...store.favoritosC, character]

      };

    case 'delete_favoriteC':
      const characterToDelete = action.payload
      return {
        ...store,
        favoritosC: store.favoritosC.filter(fav => fav.id !== characterToDelete.id)
      };


    default:
      throw Error('Unknown action.');
  }
}
