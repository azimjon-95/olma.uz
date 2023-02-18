import {LOG_IN, LOG_OUT} from '../action/action'
const auth = (state= null, action)=>{
    switch (action.type) {
        case LOG_IN:
            return state = action.payload
            // break;
        case LOG_OUT:
            return state = null
        default:
            return state;
    }
}

export default auth;