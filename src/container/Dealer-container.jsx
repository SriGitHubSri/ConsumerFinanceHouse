import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { SampledealerForm } from "../component/sample-dealerform";
import {
  searchDealer,
  getVehicleMakes,
  getVehicleModels,
  getVehicleDescriptions,
} from "../actions/fin-house-actions";
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
  getVehicleDescriptions: (make, model) => {
    console.log("makemodel", model);
    dispatch(getVehicleDescriptions(make, model));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DealerContainer);
