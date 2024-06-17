import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store";  // Correct import paths

// Create a context to hold the global state of the application
const StoreContext = createContext();

// Define a provider component that encapsulates the store and wraps it in a context provider to 
// broadcast the information throughout all the app pages and components.
export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore());
    // Provide the store and dispatch method to all child components.
    return (
        <StoreContext.Provider value={{ store, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useGlobalReducer must be used within a StoreProvider');
    }
    const { dispatch, store } = context;
    return { dispatch, store };
}