import { ADD_TO_HEART } from "../action/action";

const addToHeart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_HEART:
      if (state.some((i) => i._id === action.payload._id)) {
        return state.filter((i) => i._id !== action.payload._id);
      }
      return (state = action.payload);
    default:
      return state;
  }
};

export default addToHeart;
