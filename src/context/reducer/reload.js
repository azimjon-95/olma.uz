import {RELOAD} from '../action/action'
const reload = (state=false, action)=>{
    switch (action.type) {
        case RELOAD:
            return state = !state
            // break;
    
        default:
            return state;
    }
}

export default reload;