import React, { createContext, useReducer, useMemo } from "react";

//initil state
export const initialState = {
    userData: null,
    paymentOptions:[],
};

//actions
// const CACHE_USER_DATA = "CACHE_USER_DATA";
export const ACTIONS = {
    CACHE_USER_DATA: "CACHE_USER_DATA",
    CACHE_PAYMENT_OPTIONS: "CACHE_PAYMENT_OPTIONS",
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
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

//create globel context
export const GlobalContext = createContext(initialState);
// export  globel context  component
export default GlobelState;