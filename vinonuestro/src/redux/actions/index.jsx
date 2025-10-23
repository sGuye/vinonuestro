export const GET_WINES = "GET_WINES";



export function getAllWines() {
  return async function (dispatch) {
    // let json = await axios.get("http://localhost:3001/wines");
    // return dispatch({
    //   type: "GET_WINES",
    //   payload: json.data,
    // });
  };
}