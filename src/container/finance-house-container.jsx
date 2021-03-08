import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { FinanceHouseForm } from "../component/form/finance-house-form";
import {
  searchDealer,
  getVehicleMakes,
  getVehicleModels,
  getVehicleDetails,
  getVehicleDescriptions,
  proceedToQuote,
  ResetFinHouseState,
  getCarImage,
} from "../actions/fin-house-actions";
import * as Navigate from "../constants/routes-constant";

const FinanceHouseContainer = new reduxForm({
  form: "sampleForm",
})(FinanceHouseForm);

FinanceHouseContainer.defaultProps = {};
export const mapStateToProps = (state) => ({
  financeHouseState: state.financeHouse,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuote: (vehicle, dealer, color) => {
    //console.log("onQuote1", vehicle, dealer);
    dispatch(proceedToQuote(vehicle, dealer, color));
    ownProps.history.push(Navigate.TO_QUOTES);
  },
  searchDealer: (postcd) => {
    //console.log("postcd", postcd);
    dispatch(searchDealer(postcd));
  },
  resetFinHouseStateValues: () => {
    // console.log('reset from container');
    // dispatch(ResetFinHouseState());
  },
  getVehicleMakes: () => {
    dispatch(getVehicleMakes());
  },
  getVehicleModels: (make) => {
    //dispatch(ResetFinHouseState());

    dispatch(getVehicleModels(make));
  },
  getVehicleDetails: (make, model, description) => {
    console.log("makes cont", make + model + description);
    dispatch(getVehicleDetails(make, model, description));
  },
  getVehicleDescriptions: (make, model) => {
    dispatch(getCarImage(make, model));
    dispatch(getVehicleDescriptions(make, model));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinanceHouseContainer);
