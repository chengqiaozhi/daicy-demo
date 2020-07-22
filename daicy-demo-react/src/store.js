import {createStore} from "redux";

const state =  {
    name: 'created by zipple'
};
const reducer = (defaultState = state, action) => {
    return defaultState;
};

export default createStore(reducer);