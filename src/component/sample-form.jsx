import React, { Component } from "react";
import { Field } from "redux-form";
import { SampleField } from "./sample-field";
import "../styles/finhouse.css";

export class SampleForm extends Component {
  constructor() {
    super();
    //set state properties
    this.state = {
      makeValue: "",
      modelValue: "",
      descValue: "",
      makeList: [],
      modelList: [],
      descList: [],
      postCode: "",
    };

    //bind Make onchange event
    this.handleChangeMake = this.handleChangeMake.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
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

  handlePostCodeChange(event) {
    this.setState({ postCode: event.target.value });
  }

  render() {
    console.log("fin house11");
    const { postcode } = this.props;
    const { financeHouseState } = this.props;
    //const { searchResults } = this.props.dealerSearchResult;
    console.log("fin22", financeHouseState);
    return (
      <React.Fragment>
        <div className="form-body">
          <form>
            <section className="sections">
              <div className="row">
                <div className="col-md-7 subsections">
                  <h6>Search Vehicle</h6>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <div className="form-group">
                          <label>Make:</label>
                          <select
                            className="form-control md"
                            onChange={this.handleChangeMake}
                          >
                            <option className="dorpdowns" value="0"></option>
                            {/* {this.state.makeList.map((make) => (
                        <option key={make.id} value={make.id}>
                          {make.value}
                        </option>
                      ))} */}
                            {financeHouseState.makeList &&
                              financeHouseState.makeList.length > 0 &&
                              financeHouseState.makeList.map((model, idx) => (
                                <option key={idx} value={idx}>
                                  {model}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group">
                          <label>Model:</label>
                          <select
                            className="form-control md"
                            onChange={this.handleChangeModel}
                          >
                            <option value="0"></option>
                            {financeHouseState.modelList &&
                              financeHouseState.modelList.length > 0 &&
                              financeHouseState.modelList.map((model, idx) => (
                                <option key={idx} value={idx}>
                                  {model}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group">
                          <label>Description:</label>
                          <select
                            className="form-control md"
                            onChange={this.handleChangeDesc}
                          >
                            <option value="0"></option>

                            {
                              financeHouseState.descriptionList &&
                                financeHouseState.descriptionList.length > 0 &&
                                financeHouseState.descriptionList.map(
                                  (model, idx) => (
                                    <option key={idx} value={idx}>
                                      {model}
                                    </option>
                                  )
                                )
                              // : (
                              //   <span>
                              //     {financeHouseState.dealerSearchResults.message}
                              //   </span>
                              // )
                            }
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md vehicle-header">
                      <span>{this.state.makeValue}</span>
                      <span>{this.state.modelValue}</span>
                      <span>{this.state.descValue}</span>
                    </div>
                  </div>
                  <div className="vehicle-items">
                    <div className="row vehicle-item">
                      <div className="col-sm">
                        <label>Price(£): </label>
                        {/* <span> {this.state.priceVal}</span> */}
                        {financeHouseState.vehicleDetails &&
                        financeHouseState.vehicleDetails.length > 0 ? (
                          financeHouseState.vehicleDetails.map((model, idx) => (
                            <span key={idx}>{model.cash_price}</span>
                          ))
                        ) : (
                          <span>{""}</span>
                        )}
                      </div>

                      <div className="col-sm">
                        <label>Color: </label>
                        {financeHouseState.vehicleDetails &&
                        financeHouseState.vehicleDetails.length > 0 ? (
                          financeHouseState.vehicleDetails.map((model, idx) => (
                            <span key={idx}>
                              {model.color.toString().substring(0, 130)}
                            </span>
                          ))
                        ) : (
                          <span>{""}</span>
                        )}
                      </div>
                    </div>
                    <div className="row vehicle-item">
                      <div className="col-sm">
                        <label>Transmission: </label>
                        {financeHouseState.vehicleDetails &&
                        financeHouseState.vehicleDetails.length > 0 ? (
                          financeHouseState.vehicleDetails.map((model, idx) => (
                            <span key={idx}>{model.transmission}</span>
                          ))
                        ) : (
                          <span>{""}</span>
                        )}
                      </div>
                      <div className="col-sm">
                        <label>Body Style: </label>
                        {financeHouseState.vehicleDetails &&
                        financeHouseState.vehicleDetails.length > 0 ? (
                          financeHouseState.vehicleDetails.map((model, idx) => (
                            <span key={idx}>{model.body_style}</span>
                          ))
                        ) : (
                          <span>{""}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 subsections bg-new">
                  <h6>Search Dealer</h6>
                  <div className="row m-4">
                    <label>Find a Dealer</label>
                    <input
                      type="text"
                      onChange={this.handlePostCodeChange}
                      placeholder="Enter Postcode"
                      className="form-control"
                    ></input>
                    <button
                      type="button"
                      onClick={() =>
                        this.props.searchDealer(this.state.postCode)
                      }
                      className="button is-primary is-small"
                    >
                      Search
                    </button>
                  </div>
                  <div className="dealer-list">
                    {financeHouseState.dealerSearchResults &&
                    financeHouseState.dealerSearchResults.length > 0 ? (
                      financeHouseState.dealerSearchResults.map(
                        (model, idx) => (
                          //console.log(idx)
                          <div className="row dealer-list-item" key={idx}>
                            <a key={idx}>
                              {model.dealer_name + ", " + model.town}
                            </a>
                          </div>
                        )
                      )
                    ) : (
                      <span>
                        {financeHouseState.dealerSearchResults.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

SampleForm.propTypes = {};

SampleForm.defaultProps = {};
