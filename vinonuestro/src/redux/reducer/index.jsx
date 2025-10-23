import { GET_WINES } from "../actions";

const initialState = {
    wines: [],
};





export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WINES: //get all Wines
      return state;
    default:
      return state;
  }
}
