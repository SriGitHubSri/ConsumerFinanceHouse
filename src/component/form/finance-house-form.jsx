import React, { Component } from "react";
import Alert from "../elements/alert";
import { Field } from "redux-form";
import { InputSelect } from "../elements/input-select";
import { InputField } from "../elements/input-field";

export class FinanceHouseForm extends Component {
  constructor() {
    super();
    //set state properties
    this.state = {
      makeValue: "",
      modelValue: "",
      descValue: "",
      colorValue: "",
      makeList: [],
      modelList: [],
      descList: [],
      postCode: "",
    };

    //bind Make onchange event
    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handlePostCodeChange = this.handlePostCodeChange.bind(this);
  }

  componentDidMount() {
    this.props.getVehicleMakes();
  }

  //make on-change event
  handleChangeMake(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedMake = event.target[selectedIdx].text;
    this.setState({ makeValue: selectedMake });

    this.props.getVehicleModels(selectedMake);
  }

  handleChangeModel(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedModel = event.target[selectedIdx].text;
    this.setState({ modelValue: selectedModel });
    this.props.getVehicleDescriptions(this.state.makeValue, selectedModel);
  }

  handleChangeDesc(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedDesc = event.target[selectedIdx].text;
    this.setState({ descValue: selectedDesc });

    this.props.getVehicleDetails(
      this.state.makeValue,
      this.state.modelValue,
      selectedDesc
    );
  }

  handleChangeColor(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedColor = event.target[selectedIdx].text;
    this.setState({ colorValue: selectedColor });
  }

  handlePostCodeChange(event) {
    this.setState({ postCode: event.target.value });
  }

  getBrandLogo(make) {
    switch (make) {
      case "Chevrolet":
        return (
          <img
            className="logo-mall"
            src={require("../../assets/images/Chevrolet-logo.png")}
          />
        );
      case "Ferrari":
        return (
          <img
            className="logo-mall"
            src={require("../../assets/images/logo-Ferrari.png")}
          />
        );
      case "Audi":
        return (
          <img
            className="logo-mall"
            src={require("../../assets/images/Audi-logo.png")}
          />
        );
      default:
        return (
          <img
            className="logo-mall"
            src={require("../../assets/images/logo.png")}
          />
        );
    }
  }

  render() {
    console.log("fin house11");
    const { postcode, onQuote } = this.props;
    const { financeHouseState } = this.props;
    //const { searchResults } = this.props.dealerSearchResult;
    console.log("fin22", financeHouseState);
    return (
      <React.Fragment>
        <div className="finance-container">
          <div className="title-bar">
            <a className="navbar-brand" href="#">
              <img
                className="logo-small"
                src={require("../../assets/images/logo.png")}
              />
            </a>
            <span className="is-size-3 has-text-weight-medium">
              Choose your Car
            </span>
          </div>
          <div className="finance-content">
            <Alert />
            <br />

            <form>
              <span className="is-size-4 has-text-weight-medium">
                Let's get started with your choice of car
              </span>
              <hr className="heading-divider" />
              <br />
              <div className="finance-content-form">
                <Field
                  name="carType"
                  component={InputSelect}
                  label="Car make"
                  labelWidth={110}
                  onChange={this.handleChangeMake}
                  helperText="Pleae chose one of the car make"
                >
                  <option value="" />
                  {financeHouseState.makeList &&
                    financeHouseState.makeList.length > 0 &&
                    financeHouseState.makeList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>
                <br />
                <Field
                  name="carModel"
                  component={InputSelect}
                  label="Car model"
                  labelWidth={110}
                  onChange={this.handleChangeModel}
                  helperText="Pleae chose one of the car model"
                >
                  <option value="" />
                  {financeHouseState.modelList &&
                    financeHouseState.modelList.length > 0 &&
                    financeHouseState.modelList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>
                <br />
                <Field
                  name="carSegment"
                  component={InputSelect}
                  label="Car segment"
                  labelWidth={110}
                  onChange={this.handleChangeDesc}
                  helperText="Pleae chose one of the car segment"
                >
                  <option value="" />
                  {financeHouseState.descriptionList &&
                    financeHouseState.descriptionList.length > 0 &&
                    financeHouseState.descriptionList.map((model, idx) => (
                      <option key={idx} value={idx}>
                        {model}
                      </option>
                    ))}
                </Field>
                <br />
                <Field
                  name="carColor"
                  component={InputSelect}
                  label="Car color"
                  labelWidth={110}
                  onChange={this.handleChangeColor}
                  helperText="Pleae chose one of the car color"
                >
                  <option value="" />
                  {financeHouseState.vehicleDetails &&
                    financeHouseState.vehicleDetails.length > 0 &&
                    financeHouseState.vehicleDetails[0].color.map(
                      (color, idx) => (
                        <option key={idx} value={idx}>
                          {color}
                        </option>
                      )
                    )}
                </Field>
                <br />
                <Field
                  component={InputField}
                  labelWidth={175}
                  onChange={this.handlePostCodeChange}
                  name="findDealer"
                  label="Find your nearest dealer"
                  helperText="Please enter your nearest post code"
                />
              </div>
              <br />
              <hr className="heading-divider" />
              <div className="columns is-mobile">
                <div className="column">
                  <button
                    type="button"
                    onClick={() => this.props.searchDealer(this.state.postCode)}
                    className="button is-primary is-medium"
                  >
                    Find your best dealer
                  </button>
                </div>
              </div>
            </form>
            <br />
            <br />
            <span className="is-size-4 has-text-weight-medium">
              Your options
            </span>
            <br />
            <br />
            {financeHouseState.vehicleDetails &&
            financeHouseState.vehicleDetails.length > 0 &&
            financeHouseState.dealerSearchResults &&
            financeHouseState.dealerSearchResults.length > 0 ? (
              financeHouseState.dealerSearchResults.map((dealer, idx) => (
                <div className="box" key={idx}>
                  {financeHouseState.vehicleDetails.map((vehicle, idx1) => (
                    <div className="columns" key={idx1}>
                      <div className="column is-one-quarter">
                        {this.getBrandLogo(vehicle.make_name)}
                      </div>
                      <div className="column">
                        <span className="plan-header is-size-4 has-text-weight-medium">
                          {vehicle.make_name +
                            "-" +
                            vehicle.model_name +
                            "-" +
                            vehicle.description}
                        </span>
                        <ul>
                          <li>{vehicle.transmission}</li>
                          <li>{vehicle.fuel_type}</li>
                          <li>{vehicle.body_style}</li>
                          <li>{this.state.colorValue}</li>
                        </ul>
                      </div>
                      <div className="column is-one-quarter">
                        <div className="columns is-mobile">
                          <div className="column">
                            <div className="is-size-3 has-text-weight-bold">
                              {dealer.dealer_apr}% APR
                            </div>
                            <br />
                            <div className="is-size-6">
                              Vehicle cost : £{vehicle.cash_price}
                            </div>
                            <br />
                            <div className="is-size-6">
                              {dealer.dealer_name}
                            </div>
                            <div className="is-size-6">
                              {"Located in : " +
                                dealer.town +
                                ", " +
                                dealer.city +
                                ", " +
                                dealer.postcode}
                            </div>
                            <br />
                            <div className="columns is-mobile">
                              <div className="column">
                                <button
                                  className="button is-primary is-medium"
                                  onClick={() =>
                                    onQuote(
                                      vehicle,
                                      dealer,
                                      this.state.colorValue
                                    )
                                  }
                                >
                                  Proceed to Quote
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <span>{financeHouseState.dealerSearchResults.message}</span>
            )}

            <hr className="heading-divider" />
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

FinanceHouseForm.propTypes = {};

FinanceHouseForm.defaultProps = {};
