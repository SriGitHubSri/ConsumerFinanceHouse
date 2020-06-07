import React, { Component } from "react";
import { Field } from "redux-form";
import { SampleField } from "./sample-field";
import "../styles/finhouse.css";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
//import { searchDealer } from "../actions/fin-house-actions";
import { bindActionCreators } from "redux";

///Sample data: todo- get it from API
const vehicles = [
  {
    make_name: "Chevrolet",
    model_name: "A4",
    description: "Sports car",
    cash_price: 500000.0,
    color:
      "Intense Black;Cashmere;Sterling Silver;Blazing Red;Platinum Metallic;Amber;Casablanca White;",
    transmission: "Manual",
    fuel_type: "Petrol",
    body_style: "Sedan",
    model_year: 2006,
    vehicle_mileage: 40000,
    vehicle_id: "VH01",
  },
  {
    make_name: "Chevrolet",
    model_name: "X5",
    description: "Small car 1.4",
    cash_price: 500000.0,
    color:
      "Intense Black;Cashmere;Sterling Silver;Blazing Red;Platinum Metallic;Amber;Casablanca White;",
    transmission: "Manual",
    fuel_type: "Petrol",
    body_style: "Sedan",
    model_year: 2006,
    vehicle_mileage: 40000,
    vehicle_id: "VH01",
  },
  {
    make_name: "Ferrari",
    model_name: "F-Pace",
    description: "Compact Luxury",
    cash_price: 480000,
    color:
      "Caviar Black;Cavlar Black + Linen Beige;Velvet Red;Velvet Red + Linen Beige;Sandrift Grey + Linen Beige;Switchbleade Silver;Summit White;Linen Beige;Moonbeam White + Linen Beige;Moonbeam White;aviar Black;Sanddrift Grey;Velvet Red;Linen Beige;Moonbeam White;Summit White;",
    transmission: "Manual",
    fuel_type: "Diesel",
    body_style: "SUV",
    model_year: 2008,
    vehicle_mileage: 40000,
    vehicle_id: "VH01",
  },
  {
    make_name: "Ferrari",
    model_name: "E-Pace",
    description: "Compact SUV",
    cash_price: 480000,
    color:
      "Caviar Black;;Velvet Red;Velvet Red + Linen Beige;Switchbleade Silver;Summit White;Linen Beige;Moonbeam White + Linen Beige;Moonbeam White;aviar Black;Sanddrift Grey;Velvet Red;Linen Beige;Moonbeam White;Summit White;",
    transmission: "Manual",
    fuel_type: "Diesel",
    body_style: "SUV",
    model_year: 2008,
    vehicle_mileage: 40000,
    vehicle_id: "VH01",
  },
];

//Todo--Get the values from API instead of static data
var priceVal, colorVal, bodyTypeVal, fuelVal, transVal;

function getModelDescFromMake(selectedMake, isModel) {
  var modelLst = [];
  var counter = 0;
  var a = vehicles.forEach(function (item) {
    counter++;
    if (item.make_name == selectedMake) {
      if (isModel) modelLst.push({ id: counter, value: item.model_name });
      else modelLst.push({ id: counter, value: item.description });

      priceVal = item.cash_price;
      bodyTypeVal = item.body_style;
      colorVal = item.color;
      transVal = item.transmission;
    }
  });
  return modelLst;
}

export class SampleForm extends Component {
  constructor() {
    super();
    //set state properties
    this.state = {
      makeValue: "",
      modelValue: "",
      descValue: "",
      priceVal: "",
      bodyTypeVal: "",
      colorVal: "",
      transVal: "",
      makeList: [], //getMakes(),
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

  //get makes from API
  getMakes() {
    var makelLst = [];
    var counter = 0;
    var a = vehicles.forEach(function (item) {
      counter++;
      makelLst.push({ id: counter, value: item.make_name });
    });
    console.log("makelLst", makelLst);
    this.setState({ makeList: makelLst });
    // fetch("http://20.39.216.252:44301/api/v1/vehicles/makes")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //       var makeArr = [];
    //       var counter = 0;
    //       var a = result.forEach(function (item) {
    //         counter++;
    //         makeArr.push({ id: counter, value: item });
    //       });
    //       console.log(makeArr);
    //       this.setState({
    //         makeList: makeArr,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         error,
    //       });
    //     }
    //   );
  }

  getModels(make) {
    fetch("http://localhost:44301/api/v1/vehicles/makes")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          var makeArr = [];
          var counter = 0;
          var a = result.forEach(function (item) {
            counter++;
            makeArr.push({ id: counter, value: item });
          });
          console.log(makeArr);
          this.setState({
            makeList: makeArr,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  ///API Call: currently not returning any lists..once it returns lists then bind with DDLs
  componentDidMount() {
    this.getMakes();
  }

  //make on-change event
  handleChangeMake(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedMake = event.target[selectedIdx].text;
    this.setState({ makeValue: selectedMake });

    console.log(getModelDescFromMake(selectedMake, "model_name"));
    //set Model List options
    this.setState({ modelList: getModelDescFromMake(selectedMake, true) });

    //set Description List options: shouldn't be a DDL I guess
    this.setState({ descList: getModelDescFromMake(selectedMake, false) });
  }

  handleChangeModel(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedModel = event.target[selectedIdx].text;
    this.setState({ modelValue: selectedModel });
  }

  handleChangeDesc(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedDesc = event.target[selectedIdx].text;
    this.setState({ descValue: selectedDesc });

    this.setState({ priceVal: "£" + priceVal });
    this.setState({ colorVal: colorVal });
    this.setState({ bodyTypeVal: bodyTypeVal });
    this.setState({ transVal: transVal });
  }

  handlePostCodeChange(event) {
    this.setState({ postCode: event.target.value });
  }

  render() {
    console.log("fin house11");
    const { postcode } = this.props;
    const { financeHouseState } = this.props;
    //const { searchResults } = this.props.dealerSearchResult;
    //console.log("fin22", financeHouseState);
    return (
      <React.Fragment>
        <div className="form-body">
          <form>
            <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div className="form-group">
                    <label>Make:</label>
                    <select
                      className="form-control md"
                      onChange={this.handleChangeMake}
                    >
                      <option className="dorpdowns" value="0">
                        --Select a Make--
                      </option>
                      {this.state.makeList.map((make) => (
                        <option key={make.id} value={make.id}>
                          {make.value}
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
                      <option value="0">--Select a Model--</option>
                      {this.state.modelList.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.value}
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
                      <option value="0">--Select a Description--</option>
                      {this.state.descList.map((desc) => (
                        <option key={desc.id} value={desc.id}>
                          {desc.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <section className="sections">
              <div className="row">
                <div className="col-md-5 subsections">
                  <h5>Vehicle Details</h5>
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
                        <label>Price: </label>
                        <span> {this.state.priceVal}</span>
                      </div>

                      <div className="col-sm">
                        <label>Color: </label>
                        <span>{this.state.colorVal}</span>
                      </div>
                    </div>
                    <div className="row vehicle-item">
                      <div className="col-sm">
                        <label>Transmission: </label>
                        <span>{this.state.transVal}</span>
                      </div>
                      <div className="col-sm">
                        <label>Body Style: </label>
                        <span>{this.state.bodyTypeVal}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 subsections">
                  <h5>Search Dealer</h5>
                  <div className="row m-4">
                    <label>Find a Dealer nearby</label>
                    <input
                      type="text"
                      onChange={this.handlePostCodeChange}
                      placeholder="Enter Post code"
                      className="form-control"
                    ></input>
                    <button
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
                    financeHouseState.dealerSearchResults.result ? (
                      financeHouseState.dealerSearchResults.result
                        .slice(0, 5)
                        .map((model, idx) => (
                          //console.log(idx)
                          <div className="row dealer-list-item" key={idx}>
                            <a key={idx}>
                              {model.postcode + " - " + model.admin_ward}
                            </a>
                          </div>
                        ))
                    ) : (
                      <span>{financeHouseState.dealerSearchResults.error}</span>
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
