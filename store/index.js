import { createStore,combineReducers } from "redux"
//
const initState = {



};

//Reducers
import CartReducer from './reducers/CartReducer'

const rootReducers = combineReducers({
    CartReducer
});

const store = createStore(rootReducers,initState);






store.subscribe(() =>{
    console.log('Updated State value',store.getState());
})

export default store