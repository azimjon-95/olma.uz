import { combineReducers } from 'redux';
import reload from './reducer/reload';
import reduxCart from './reducer/cart'
import addToHeart from './reducer/addToHeart'
import auth from './reducer/auth'

const rootReducer = combineReducers({
    def: ()=>"redux is running",
    reload,
    reduxCart,
    addToHeart,
    auth
})

export default rootReducer;