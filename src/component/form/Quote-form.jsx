import React, { Component } from "react";
import { Field } from 'redux-form';
import { InputSelect } from '../elements/input-select';
import QuoteDetails from '../elements/quote-details';

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


  handleQuote = (event) => {
    event.preventDefault();
    // const quote = event.target;

    const quoteformvalue = {
      term: this.state.term,
      deposit: this.state.deposit_amount,
      annual_mileage: this.state.max_annual_mileage,
    };

    console.log(this.state.term);
    console.log(this.state.deposit_amount);
    console.log(this.state.max_annual_mileage);
    console.log(quoteformvalue);
    this.props.ToQuotes(quoteformvalue);
    this.props.ToPCPQuotes(quoteformvalue);
  }



  render() {
    const { QuoteState, PCPQuoteState, financeHouseState, toProposal, ToQuotes, Quotefinancialstate } = this.props;

    return (
      <React.Fragment>
        <div className="quotes-container">
          <div className="title-bar">
            <a className="navbar-brand" href="#">
              <img className="logo-small" src={require("../../assets/images/logo.png")} />
            </a>
            <span className="is-size-3 has-text-weight-medium">Choose your quote</span>
          </div>
          {financeHouseState.vehicleDetails[0] &&

            <div className="quote-content">
              <span className="is-size-4 has-text-weight-medium">Your vehicle summary</span>
              <br />
              <br />
              <div class="box">
                <div class="columns">
                  <div class="column is-one-quarter">
                    <img className="logo-mall" src={require("../../assets/images/logo-Ferrari.png")} />
                  </div>
                  <div class="column">
                    <span className="plan-header is-size-4 has-text-weight-medium">{financeHouseState.vehicleDetails[0].make_name} - {financeHouseState.vehicleDetails[0].model_name} - {financeHouseState.vehicleDetails[0].description}</span>
                    <ul>
                      <li>{financeHouseState.vehicleDetails[0].transmission}</li>
                      <li>Petrol</li>
                      <li> {financeHouseState.vehicleDetails[0].body_style}</li>
                      <li>Black</li>
                    </ul>
                  </div>
                  <div class="column is-one-quarter">
                    <div className="columns is-mobile">
                      <div className="column">
                        <div className="is-size-3 has-text-weight-bold">5.6% APR</div>
                        <br />
                        <div className="is-size-6">Vehicle cost : £{financeHouseState.vehicleDetails[0].cash_price}</div>
                        <br />
                        <div className="is-size-6">Located in Mitcham, Surrey</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    helperText="Pleae choose one the term"
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
                    helperText="Pleae choose initial deposit"
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
                    name="milage"
                    component={InputSelect}
                    label="Annual milage"
                    labelWidth={110}
                    onChange={this.handleChangeMileage}
                    helperText="Pleae choose annual milage"
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

              {QuoteState && QuoteState.QuoteResults &&
                <React.Fragment>
                  <br />
                  <span className="is-size-4 has-text-weight-medium">Your quote result</span>
                  <br />
                  <br />
                  <QuoteDetails {...QuoteState} term={this.state.term} toProposal={toProposal} />
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
