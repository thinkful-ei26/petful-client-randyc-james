import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from './reducers/Dog';
import catReducer from './reducers/Cat';

const store = createStore(combineReducers({
        cat: catReducer,
        dog: dogReducer
    }),
    applyMiddleware(thunk)
);

export default store;