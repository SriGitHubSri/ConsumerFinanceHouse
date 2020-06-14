import React, { Component } from "react";
import { Field } from "redux-form";
import { SampleField } from "./sample-field";
import "../styles/finhouse.css";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../styles/home.css";
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Inject, Filter, Group } from '@syncfusion/ej2-react-grids';
import data from "../dataSource.json";


///Sample data: todo- get it from API
const vehicles = [
  {
    make_name: "Chevrolet",
    model_name: "Aveo",
    description: "Sports car",
    cash_price: 500000.0,
    color:
      "Intense Black;",
    transmission: "Manual",
    fuel_type: "Petrol",
    body_style: "Sedan",
    model_year: 2006,
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

export class SampledealerForm extends Component {
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
    this.props.getVehicleDescriptions(this.state.makeValue, selectedModel);
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
    console.log("fin22", financeHouseState);
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
                        Select a Make
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
                      <option value="0">Select a Model</option>
                      {this.state.modelList.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>
            </div>
            <hr />

            <div>

              <h5>Vehicle Details</h5>

              <div >
                <GridComponent dataSource={data}
                  allowPaging={true}
                  pageSettings={{ pageSize: 2 }}
                  allowFiltering={true}
                  allowGrouping={true}
                >
                  <ColumnsDirective>
                    <ColumnDirective type='checkbox' width='50'></ColumnDirective>
                    <ColumnDirective field='make_name' headerText='Make' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='model_name' headerText='Model' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='description' headerText='Description' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='cash_price' headerText='Cash' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='color' headerText='Color' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='transmission' headerText='Transmission' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='fuel_type' headerText='Fuel Type' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='body_style' headerText='Body Style' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='model_year' headerText='Model Year' textalign='Right' width='100'></ColumnDirective>
                    <ColumnDirective field='vehicle_mileage' headerText='Vehicle Mileage' textalign='Right' width='100'></ColumnDirective>
                  </ColumnsDirective>
                  <Inject services={[Page, Filter, Group]} />
                </GridComponent>
              </div>
            </div>



          </form>


        </div>
      </React.Fragment>
    );
  }
}

SampledealerForm.propTypes = {};

SampledealerForm.defaultProps = {};
