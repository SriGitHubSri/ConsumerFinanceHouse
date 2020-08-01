import {
  GET_QUOTE,
} from "../actions/quotes-action";
import {
  GET_PCP_QUOTE,
  SELECTED_PRODUCT,
  FAIL_HPQUOTE,
  FAIL_PCPQUOTE,
} from "../actions/quotes-action";

const initialState = {
  HPQuoteResults: "",
  PCPQuoteResults: "",
  SelectedProduct: "",
  FailHPQuote: "",
  FailPCPQuote: "",
  // makeList: "",
  // modelList: "",
  // descriptionList: "",
};

/*
const initialState = {
    quote: 'testQuote',
    counter: 0,
    loggedIn: true,
  };
*/

const quote = (state = initialState, action) => {
  console.log("action.type", action.type);
  switch (action.type) {

    case GET_QUOTE:
      return {
        ...state,
        HPQuoteResults: action.json,
          FailHPQuote: "",
          loading: false,
      };

    case GET_PCP_QUOTE:
      return {
        ...state,
        PCPQuoteResults: action.json,
          FailPCPQuote: "",
          loading: false,
      };

    case SELECTED_PRODUCT:
      return {
        ...state,
        SelectedProduct: action.string,
          loading: false,
      };

    case FAIL_HPQUOTE:
      return {
        ...state,
        FailHPQuote: action.json,
          HPQuoteResults: "",
          loading: false,
      };

    case FAIL_PCPQUOTE:
      return {
        ...state,
        FailPCPQuote: action.json,
          PCPQuoteResults: "",
          loading: false,
      };

    default:
      return state;
  }
};

export default quote;