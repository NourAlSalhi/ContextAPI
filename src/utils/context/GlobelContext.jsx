import React, { createContext, useReducer, useMemo } from "react";

//initil state
export const initialState = {
    userData: null
};

//actions
// const CACHE_USER_DATA = "CACHE_USER_DATA";
const ACTIONS = {
    CACHE_USER_DATA: "CACHE_USER_DATA"
};
const Reducer = (globelState, action) => {
    switch (action.type) {
        case ACTIONS.CACHE_USER_DATA:
            return {
                ...globelState,
                userData: action.paload
            };
        default:
            return globelState;
    }
};

//globel state which its provide context for children

const GlobelState = ({ children, defaultInitialState = {} }) => {
    defaultInitialState = { ...initialState, ...defaultInitialState };

    const [globelState, dispatch] = useReducer(Reducer, defaultInitialState);
    const logoutUser = () =>{
        localStorage.clear();
        return true;
    }
    //use useMemo to keep render globelState and improve performance
    const contextValue = useMemo(() => {
        return {
            globelState,
            dispatch,
            logoutUser
        };
    }, [globelState]);
    return (
        <GlobelContext.Provider value={contextValue}>
            {children}
        </GlobelContext.Provider>
    );
};

//create globel context
export const GlobelContext = createContext(initialState);
// export  globel context  component
export default GlobelState;