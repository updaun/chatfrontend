import React, {createContext, useReducer} from 'react';
import { updateChatReducer } from './reducers';

const reduceReducers = (...reducers) => (prevState, value, ...args) => {
    reducers.reduce(
        (newState, reducer) => reducer(newState, value, ...args),
        prevState
    )
}

const combineReducers = reduceReducers(
    ...updateChatReducer
);

const initialState = {
    ...updateChatState,
};

const store = createContext(initialState);
const {Provider} = store;

const StoreProvider = ({children}) => {
    const [state, dispatch] = userReducer(combineReducers, {});

    return <Provider value={{state, dispatch}}>{children}</Provider>;
}

export {store, StoreProvider};