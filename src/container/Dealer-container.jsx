import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { SampledealerForm } from "../component/sample-dealerform";
import {
  searchDealer,
  getVehicleMakes,
  getVehicleModels,
  getVehicleDetails,
  getVehicleDescriptions,
  getAllVehicleDetails
} from "../actions/fin-house-actions";
import * as Navigate from '../constants/routes-constant'
const DealerContainer = new reduxForm({
  form: "sampledealerForm",
})(SampledealerForm);

// FormContainer.propTypes = {
// };

// FormContainer.defaultProps = {
// };

// export const mapStateToProps = state => ({
// });

// export const mapDispatchToProps = (dispatch, ownProps) => ({
// });

DealerContainer.defaultProps = {};
export const mapStateToProps = (state) => ({
  financeHouseState: state.financeHouse,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onQuote: () => {
    ownProps.history.push(Navigate.TO_QUOTES);
  },
  searchDealer: (postcd) => {
    //console.log("postcd", postcd);
    dispatch(searchDealer(postcd));
  },
  getVehicleMakes: () => {
    dispatch(getVehicleMakes());
  },
  getVehicleModels: (make) => {
    dispatch(getVehicleModels(make));
  },
  getVehicleDetails: (make, model, description) => {
    console.log("makes cont", make + model + description);
    dispatch(getVehicleDetails(make, model, description));
  },
  getVehicleDescriptions: (make, model) => {
    console.log("makemodel", model);
    dispatch(getVehicleDescriptions(make, model));
  },
  getAllVehicleDetails: (make, model) => {
    dispatch(getAllVehicleDetails(make, model));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DealerContainer);
