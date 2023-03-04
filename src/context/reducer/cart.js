import {
  ADD_TO_CART,
  REMOVE_PROD_FROM_CART,
  CLEARE_CART,
} from "../action/action";
const reduxCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return (state = action.payload);

    // break;
    case REMOVE_PROD_FROM_CART:
      return (state = state.filter((i) => i._id !== action.payload));
    // break;
    case CLEARE_CART:
      return (state = action.payload);
    // break;
    default:
      return state;
  }
};

export default reduxCart;
