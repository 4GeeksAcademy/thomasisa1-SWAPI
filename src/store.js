export const initialStore = () => ({
  message: null,
  favorites: [],  // Ensure favorites is initialized as an empty array
});

export default function storeReducer(store, action = {}) {
  console.log('Reducer called with action:', action); // Log the action

  switch (action.type) {
    case 'ADD_FAVORITE':
      const newStateAdd = {
        ...store,
        favorites: [...store.favorites, action.payload],
      };
      console.log('State after ADD_FAVORITE:', newStateAdd); // Log new state
      return newStateAdd;
    case 'REMOVE_FAVORITE':
      const newStateRemove = {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid !== action.payload.uid),
      };
      console.log('State after REMOVE_FAVORITE:', newStateRemove); // Log new state
      return newStateRemove;
    default:
      console.error(`Unknown action: ${action.type}`);
      return store;
  }
}