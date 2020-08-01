import React, { Component } from "react";
import { Field } from 'redux-form';
import { InputSelect } from '../elements/input-select';
import QuoteDetails from '../elements/quote-details';
import { Typography, Paper, } from '@material-ui/core';
import { VehicleSummaryForm } from '../form/vehicle-summary-form';

export class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      termList: ["12", "24", "36", "42", "48", "52", "60"],
      depositList: ["1000", "2000", "5000", "6000", "8000", "10000"],
      mileageList: [
        "5000",
        "10000",
        "15000",
        "20000",
        "25000",
        "30000",
        "35000",
        "40000",
        "45000",
      ],
    };


    //bind Make onchange event

    this.handleChangeterm = this.handleChangeterm.bind(this);
    this.handleChangeDeposit = this.handleChangeDeposit.bind(this);
    this.handleChangeMileage = this.handleChangeMileage.bind(this);
  }


  handleChangeterm(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedTerm = event.target[selectedIdx].text;
    this.setState({ term: selectedTerm });
    console.log(selectedTerm);
    // console.log(this.state.financial.term);
  }

  handleChangeDeposit(event) {
    var selectedIdx1 = event.target.selectedIndex;
    var selectedDeposit = event.target[selectedIdx1].text;
    this.setState({ deposit_amount: selectedDeposit });
  }

  handleChangeMileage(event) {
    var selectedIdx = event.target.selectedIndex;
    var selectedMileage = event.target[selectedIdx].text;
    this.setState({ max_annual_mileage: selectedMileage });
  }

  handleHPProduct = (event) => {
    this.props.toProposal("HP");
  }

  handlePCPProduct = (event) => {
    this.props.toProposal("PCP");
  }

  handleQuote = (event) => {
    event.preventDefault();
    // const quote = event.target;

    const quoteformvalue = {
      term: this.state.term,
      deposit: this.state.deposit_amount,
      annual_mileage: this.state.max_annual_mileage,
      // vehicle_mileage: this.props.financeHouseState.vehicleDetails[0].vehicle_mileage,
      // registration_month: this.props.financeHouseState.vehicleDetails[0].registration_month,
      // registration_year: this.props.financeHouseState.vehicleDetails[0].registration_year,
      // make: this.props.financeHouseState.vehicleDetails[0].make_name,
      // model: this.props.financeHouseState.vehicleDetails[0].model_name,
      // description: this.props.financeHouseState.vehicleDetails[0].description,
      // model_year: this.props.financeHouseState.vehicleDetails[0].model_year,
      // vehicle_code: this.props.financeHouseState.vehicleDetails[0].vehicle_code,
      // cash_price: this.props.financeHouseState.vehicleDetails[0].cash_price
      vehicle_mileage: this.props.SelectedVehicleState.vehicle_mileage,
      registration_month: this.props.SelectedVehicleState.registration_month,
      registration_year: this.props.SelectedVehicleState.registration_year,
      make: this.props.SelectedVehicleState.make_name,
      model: this.props.SelectedVehicleState.model_name,
      description: this.props.SelectedVehicleState.description,
      model_year: this.props.SelectedVehicleState.model_year,
      vehicle_code: this.props.SelectedVehicleState.vehicle_code,
      cash_price: this.props.SelectedVehicleState.cash_price,
      dealer_id: this.props.SelectedDealerState.dealer_id
    };

    console.log(this.props.financeHouseState.vehicleDetails[0].make_name);
    console.log(this.state.term);
    console.log(this.state.deposit_amount);
    console.log(this.state.max_annual_mileage);
    console.log(quoteformvalue);

    this.props.ToPCPQuotes(quoteformvalue);
    this.props.ToQuotes(quoteformvalue);
  }


  render() {
    const { QuoteState, PCPQuoteState, HPQuoteState,
      financeHouseState, toProposal, ToQuotes,
      HPQuotefinancialstate, PCPfinancialstate,
      SelectedVehicleState, SelectedDealerState,
      FailedHP, FailedPCP, selectedFinHouse } = this.props;

    console.log(HPQuotefinancialstate);
    console.log(PCPfinancialstate);
    console.log(PCPQuoteState);

    return (
      <React.Fragment>
        <div className="quotes-container">
          <div className="title-bar">
            <a className="navbar-brand" href="#">
              <img className="logo-small" src={require("../../assets/images/logo.png")} />
            </a>
            <span className="is-size-3 has-text-weight-medium">Choose your quote</span>
          </div>
          {SelectedVehicleState &&

            <div className="quote-content">
              <span className="is-size-4 has-text-weight-medium">Your vehicle summary</span>
              <br />
              <br />
              <VehicleSummaryForm selectedFinHouse={selectedFinHouse}></VehicleSummaryForm>
              <br />
              <form>
                <span className="is-size-4 has-text-weight-medium">Calculate your finance options</span>
                <br />
                <hr className="heading-divider" />
                <br />
                <div className="quote-content-form">
                  <Field name="term"
                    component={InputSelect}
                    label="Term"
                    labelWidth={110}
                    onChange={this.handleChangeterm}
                    helperText="Please choose one the term"
                  >
                    <option value="" />
                    {this.state.termList &&
                      this.state.termList.length > 0 &&
                      this.state.termList.map((term, idx) => (
                        <option key={idx} value={idx}>
                          {term}
                        </option>
                      ))}
                  </Field>
                  <br />
                  <Field
                    name="deposit"
                    component={InputSelect}
                    label="Initial deposit"
                    labelWidth={110}
                    onChange={this.handleChangeDeposit}
                    helperText="Please choose initial deposit"
                  >
                    <option value="" />
                    {this.state.depositList &&
                      this.state.depositList.length > 0 &&
                      this.state.depositList.map((deposit, idx) => (
                        <option key={idx} value={idx}>
                          {deposit}
                        </option>
                      ))}
                  </Field>
                  <br />
                  <Field
                    name="mileage"
                    component={InputSelect}
                    label="Annual mileage"
                    labelWidth={110}
                    onChange={this.handleChangeMileage}
                    helperText="Please choose annual milage"
                  >
                    <option value="" />
                    {
                      this.state.mileageList &&
                      this.state.mileageList.length > 0 &&
                      this.state.mileageList.map((model, idx) => (
                        <option key={idx} value={idx}>
                          {model}
                        </option>
                      ))
                    }
                  </Field>
                </div>
                <br />
                <hr className="heading-divider" />
                <div className="columns is-mobile">
                  <div className="column">
                    <button
                      type="button"
                      onClick={this.handleQuote}
                      className="button is-primary is-medium"
                    >
                      Calculate quote
                    </button>
                  </div>
                </div>
              </form>


              <div style={{ marginTop: 0 }}>
                <Paper variant="h5" component="h2" gutterBottom >
                  {/* {!this.state.term && <Typography>
                    Please choose Term!
                        </Typography>}
                  {!QuoteState.HPQuoteResults.deposit &&
                    <Typography variant="h5" component="h2">
                      Please choose Deposit!
                </Typography>} */}
                  {FailedHP &&
                    <Typography variant="h5" component="h2">
                      Fail:
                                 {/* {proposalFail.messages} */}

                      {FailedHP.messages.map((message, idx1) => (
                        <div className="columns" key={idx1}>
                          <div className="column">
                            <span>
                              {message}
                            </span></div></div>
                      ))}
                    </Typography>}
                  {FailedPCP &&
                    <Typography variant="h5" component="h2">
                      Fail:
                                 {/* {proposalFail.messages} */}

                      {FailedPCP.messages.map((message, idx1) => (
                        <div className="columns" key={idx1}>
                          <div className="column">
                            <span>
                              {message}
                            </span></div></div>
                      ))}
                    </Typography>}
                  {!QuoteState && <Typography variant="h5" component="h2">
                    Something went wrong! Please try again after sometime!  {""}
                  </Typography>}

                </Paper>
              </div>


              {this.state.term &&
                this.state.deposit_amount &&
                this.state.max_annual_mileage &&
                QuoteState &&
                QuoteState.HPQuoteResults && QuoteState.PCPQuoteResults &&

                <React.Fragment>
                  <br />
                  <span className="is-size-4 has-text-weight-medium">Your quote result</span>
                  <br />
                  <br />

                  <QuoteDetails {...QuoteState} term={this.state.term} toProposal={toProposal}
                    HPQuotefinancial={HPQuotefinancialstate} PCPQuotefinancial={PCPfinancialstate}
                    PCPQuoteresponse={PCPQuoteState} />
                </React.Fragment>
              }
            </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

QuoteForm.propTypes = {};

QuoteForm.defaultProps = {};
