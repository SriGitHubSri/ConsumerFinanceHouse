import {
  GET_MAKE,
  GET_MODEL,
  GET_DESC,
  GET_VEH,
  SEARCH_DEALERS,
  TO_QUOTE,
  GET_ALLVEH,
} from "../actions/fin-house-actions";
const initialState = {
  //postCode: "",
  dealerSearchResults: "",
  makeList: "",
  modelList: "",
  descriptionList: "",
  vehicleDetails: "",
  selectedForQuote: "",
};

const financeHouse = (state = initialState, action) => {
  console.log("action.type", action.type);
  switch (action.type) {
    case GET_MAKE:
      return {
        ...state,
        makeList: action.json,
        loading: false,
      };
    case GET_MODEL:
      return {
        ...state,
        modelList: action.json,
        loading: false,
      };
    case GET_VEH:
      return {
        ...state,
        vehicleDetails: action.json,
        loading: false,
      };
    case GET_DESC:
      return {
        ...state,
        descriptionList: action.json,
        loading: false,
      };
    case SEARCH_DEALERS:
      //console.log("action.json", action.json);
      return {
        ...state,
        dealerSearchResults: action.json,
        loading: false,
      };
    case TO_QUOTE:
      //console.log("action.json", action.json);
      return {
        ...state,
        selectedForQuote: action.json,
        loading: false,
      };
    case GET_ALLVEH:
      return {
        ...state,
        vehicleDetails: action.json,
        loading: false,
      };
    default:
      return state;
  }
};

export default financeHouse;
