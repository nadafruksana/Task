import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import formReducer from '../reducer/formReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        post: formReducer
    }), applyMiddleware(thunk))
    return store 
}

export default configureStore
