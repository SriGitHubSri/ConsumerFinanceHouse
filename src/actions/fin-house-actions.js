export const GET_MAKE = "GET_MAKE";
export const GET_MODEL = "GET_MODEL";
export const GET_DESC = "GET_DESC";
export const SEARCH_DEALERS = "SEARCH_DEALERS";

export const getMake = (json) => ({
  type: GET_MAKE,
  json: json,
});
export const getModel = (json) => ({
  type: GET_MODEL,
  json: json,
});
export const getDescription = (json) => ({
  type: GET_DESC,
  json: json,
});
export const searchResults = (json) => ({
  type: SEARCH_DEALERS,
  json: json,
});

///Search dealer by postcode
export function searchDealer(postcode) {
  return function (dispatch) {
    //dispatch(requestPosts());
    console.log("postcode", postcode);
    return fetch(`http://localhost:44301/api/v1/dealers?postcode=${postcode}`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log("response1", json);
        dispatch(searchResults(json));
      });
  };
}

///Get Vehicle Make
export function getVehicleMakes() {
  return function (dispatch) {
    return fetch(`http://localhost:44301/api/v1/vehicles/makes`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log("responseMakes", json);
        dispatch(getMake(json));
      });
  };
}

///Get Vehicle Models
export function getVehicleModels(make) {
  return function (dispatch) {
    return fetch(`http://localhost:44301/api/v1/vehicles/makes/${make}/models`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log("responseModel", json);
        dispatch(getModel(json));
      });
  };
}

///Get Vehicle Description
export function getVehicleDescriptions(make, model) {
  return function (dispatch) {
    return fetch(
      `http://localhost:44301/api/v1/vehicles/makes/${make}/models/${model}/descriptions`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        console.log("responseDesc", json);
        dispatch(getDescription(json));
      });
  };
}