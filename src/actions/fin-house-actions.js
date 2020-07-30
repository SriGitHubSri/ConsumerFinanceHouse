export const GET_MAKE = "GET_MAKE";
export const GET_MODEL = "GET_MODEL";
export const GET_DESC = "GET_DESC";
export const GET_VEH = "GET_VEH";
export const GET_ALLVEH = "GET_ALLVEH";
export const SEARCH_DEALERS = "SEARCH_DEALERS";
export const TO_QUOTE = "TO_QUOTE";

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
export const getVehicle = (json) => ({
  type: GET_VEH,
  json: json,
});
export const getAllVehicle = (json) => ({
  type: GET_ALLVEH,
  json: json,
});
export const searchResults = (json) => ({
  type: SEARCH_DEALERS,
  json: json,
});

export const proceedToQuoteResults = (json) => ({
  type: TO_QUOTE,
  json: json,
});

//Proceed to Quote screen
export function proceedToQuote(vehicle, dealer, color) {
  return function (dispatch) {
    var json = {
      vehicleDetails: vehicle,
      dealerDetails: dealer,
      selectedColor: color,
    };
    dispatch(proceedToQuoteResults(json));
  };
}

///Search dealer by postcode
export function searchDealer(postcode) {
  return function (dispatch) {
    //dispatch(requestPosts());
    console.log("postcode", postcode);
    return fetch(
      `http://51.132.233.171:44301/api/v1/dealers?postcode=${postcode}`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        //console.log("response1", json);
        dispatch(searchResults(json));
      });
  };
}

///Get Vehicle Make
export function getVehicleMakes() {
  return function (dispatch) {
    return fetch(`http://51.132.233.171:44301/api/v1/vehicles/makes`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        //console.log("responseMakes", json);
        dispatch(getMake(json));
      });
  };
}

///Get Vehicle Models
export function getVehicleModels(make) {
  return function (dispatch) {
    return fetch(
      `http://51.132.233.171:44301/api/v1/vehicles/makes/${make}/models`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        // console.log("responseModel", json);
        dispatch(getModel(json));
      });
  };
}

///Get Vehicle Description
export function getVehicleDescriptions(make, model) {
  return function (dispatch) {
    return fetch(
      `http://51.132.233.171:44301/api/v1/vehicles/makes/${make}/models/${model}/descriptions`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        //console.log("responseDesc", json);
        dispatch(getDescription(json));
      });
  };
}

///Get Vehicle Details
export function getVehicleDetails(make, model, description) {
  return function (dispatch) {
    return fetch(
      `http://51.132.233.171:44301/api/v1/vehicles?make_name=${make}&model_name=${model}&description=${description}`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        //console.log("responseVeh", json);
        dispatch(getVehicle(json));
      });
  };
}

export function getAllVehicleDetails(make, model) {
  return function (dispatch) {
    return fetch(
      `http://51.132.233.171:44301/api/v1/vehicles?make_name=${make}&model_name=${model}`
    )
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred.", error)
      )
      .then((json) => {
        //console.log("responseVeh", json);
        dispatch(getAllVehicle(json));
      });
  };
}
