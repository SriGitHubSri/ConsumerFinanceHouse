import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { QuoteForm } from "../component/form/Quote-form";
import * as Navigate from "../constants/routes-constant";
//import { getQuote } from "../actions/quotes-action";

import { getVehicleQuotes } from "../actions/quotes-action";
import { getPCPVehicleQuotes, Saveproduct, FailPCPQuote, FailHPQuote } from "../actions/quotes-action";

const QuotesContainer = new reduxForm({
  form: "QuoteForm",
})(QuoteForm);

export const mapStateToProps = (state) => ({
  QuoteState: state.quote,
  HPQuoteState: state.quote.HPQuoteResults,
  PCPQuoteState: state.quote.PCPQuoteResults,
  HPQuotefinancialstate: state.quote.HPQuoteResults.financial,
  PCPfinancialstate: state.quote.PCPQuoteResults.financial,
  financeHouseState: state.financeHouse,
  selectedFinHouse: state.financeHouse.selectedForQuote,
  SelectedVehicleState: state.financeHouse.selectedForQuote.vehicleDetails,
  SelectedDealerState: state.financeHouse.selectedForQuote.dealerDetails,
  FailedHP: state.quote.FailHPQuote,
  FailedPCP: state.quote.FailPCPQuote,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  ToQuotes: (quoteInput) => {
    const financial = {
      "product": "HP",
      // "cash_price": (ownProps.financeHouseState) ? ownProps.financeHouseState.vehicleDetails[0].cash_price : 10000,
      "cash_price": (quoteInput.cash_price) ? quoteInput.cash_price : 10000,
      "deposit_amount": quoteInput.deposit,
      "term": quoteInput.term
    }
    const max_annual_mileage = quoteInput.annual_mileage
    const vehicle = {
      "vehicle_mileage": quoteInput.vehicle_mileage,
      "registration_month": quoteInput.registration_month,
      "registration_year": quoteInput.registration_year,
      "make": quoteInput.make,
      "model": quoteInput.model,
      "description": quoteInput.description,
      "model_year": quoteInput.model_year,
      "vehicle_code": quoteInput.vehicle_code
    }
    const dealer_id = quoteInput.dealer_id

    // console.log(financial);
    // console.log(max_annual_mileage);
    dispatch(getVehicleQuotes(financial, max_annual_mileage, vehicle, dealer_id));
  },
  ToPCPQuotes: (PCPquoteInput) => {
    const financial = {
      "product": "PCP",
      // "cash_price": (ownProps.financeHouseState) ? ownProps.financeHouseState.vehicleDetails[0].cash_price : 10000,
      "cash_price": (PCPquoteInput.cash_price) ? PCPquoteInput.cash_price : 10000,
      "deposit_amount": PCPquoteInput.deposit,
      "term": PCPquoteInput.term
    }
    const max_annual_mileage = PCPquoteInput.annual_mileage
    const vehicle = {
      // "vehicle_mileage": 5000,
      // "registration_month": 1,
      // "registration_year": 2020,
      // "make": "Ford",
      // "model": "Focus",
      // "description": "2019 model",
      // "model_year": 2019,
      // "vehicle_code": "vh01"
      "vehicle_mileage": PCPquoteInput.vehicle_mileage,
      "registration_month": PCPquoteInput.registration_month,
      "registration_year": PCPquoteInput.registration_year,
      "make": PCPquoteInput.make,
      "model": PCPquoteInput.model,
      "description": PCPquoteInput.description,
      "model_year": PCPquoteInput.model_year,
      "vehicle_code": PCPquoteInput.vehicle_code
    }
    const dealer_id = PCPquoteInput.dealer_id

    // console.log(financial);
    // console.log(max_annual_mileage);
    dispatch(getPCPVehicleQuotes(financial, max_annual_mileage, vehicle, dealer_id));
  },
  toProposal: (selectedproduct) => {
    dispatch(Saveproduct(selectedproduct));
    ownProps.history.push(Navigate.TO_PROPOSAL);
  },
  // toProposal: () => {
  //   ownProps.history.push(Navigate.TO_PROPOSAL);
  // },
});


export default connect(mapStateToProps, mapDispatchToProps)(QuotesContainer);
