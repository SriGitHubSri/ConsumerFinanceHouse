import React, { Component } from "react";
import { Field } from "redux-form";
import "../../styles/finhouse.css";
import { TextField, Radio } from 'final-form-material-ui';
import {
    Typography, Paper, Grid, Button, RadioGroup, InputLabel,
    FormLabel, FormControl, FormControlLabel, MenuItem, Select,
} from '@material-ui/core';
import { VehicleSummaryForm } from '../form/vehicle-summary-form';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export class ProposalForm extends Component {

    constructor() {
        super();
        this.state = {
            title: null,
            foreName: null,
            middleName: null,
            surName: null,
            telephone: null,
            email: null,
            dob: null,
            gender: null,
            country: null,
            maritalStatus: null,

            postcode: null,
            address: null,
            yearsAtAddress: null,
            monthsAtAddress: null,

            occupation: null,
            yearsAtEmployment: null,
            monthsAtEmployment: null,
            grossAnnualSalary: null,

            accountName: null,
            accountType: null,
            sortCode: null,
            accountNumber: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const target = event.target;

        this.setState({
            customer: [{
                title: event.target.title.value,
                foreName: event.target.foreName.value,
                middleName: event.target.middleName.value,
                surName: event.target.surName.value,
                telephone: event.target.telephone.value,
                email: event.target.email.value,
                dob: event.target.dob.value,
                gender: event.target.gender.value,
                country: event.target.country.value,
                maritalStatus: event.target.maritalStatus.value,

                postcode: event.target.postcode.value,
                address: event.target.address.value,
                yearsAtAddress: event.target.yearsAtAddress.value,
                monthsAtAddress: event.target.monthsAtAddress.value,

                occupation: event.target.occupation.value,
                yearsAtEmployment: event.target.yearsAtEmployment.value,
                monthsAtEmployment: event.target.monthsAtEmployment.value,
                grossAnnualSalary: event.target.grossAnnualSalary.value,

                accountName: event.target.accountName.value,
                accountType: event.target.accountType.value,
                sortCode: event.target.sortCode.value,
                accountNumber: event.target.accountNumber.value
            }]
        });

        // console.log(this.state);
        this.props.toProposal(this.state);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        const { fullState, vehicleDetails, toProposal } = this.props;
        return (
            <React.Fragment>
                <div className="quotes-container">
                    {/* <a className="navbar-brand" href="#">
                        <img className="logo-small" src={require("../../assets/images/logo.png")} />
                    </a> */}
                    <span className="is-size-3">Proposal Details</span>
                    <hr className="heading-divider" />
                    {this.props.vehicleDetails && <div className="level">
                        <VehicleSummaryForm vehicle={this.props.vehicleDetails}></VehicleSummaryForm>
                    </div>}
                    {this.props.vehicleDetails && <hr className="heading-divider" />}
                    {/* <br /> */}

                    <form id="proposalForm" onSubmit={this.handleSubmit} >
                        <div>
                            {/* temp */}
                            {/* <div style={{ textAlign: "right" }}>
                                <a style={{ color: "blue" }} onClick={this.setDefaultValues} >Default Value For Testing</a>
                            </div> */}

                            <Paper style={{ padding: 16 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Personal Details
                    </Typography>
                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={8}>
                                        <InputLabel style={{ marginTop: 16 }} id="title">Title *</InputLabel>
                                        <Select
                                            name="title"
                                            labelId="title"
                                            id="title"
                                            required
                                            onChange={this.handleChange}>
                                            <MenuItem value={'Dr'}>Dr</MenuItem>
                                            <MenuItem value={'Mr'}>Mr</MenuItem>
                                            <MenuItem value={'Mrs'}>Mrs</MenuItem>
                                            <MenuItem value={'Miss'}>Miss</MenuItem>
                                            <MenuItem value={'Ms'}>Ms</MenuItem>
                                            <MenuItem value={'Rev'}>Rev</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="foreName"
                                            component={TextField}
                                            type="text"
                                            label="ForeName"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            // required
                                            name="middleName"
                                            component={TextField}
                                            type="text"
                                            label="Middle Name"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="surName"
                                            component={TextField}
                                            type="text"
                                            label="SurName"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="telephone"
                                            component={TextField}
                                            type="number"
                                            label="Telephone"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="email"
                                            component={TextField}
                                            type="email"
                                            label="Email"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="dob"
                                            component={TextField}
                                            type="text"
                                            label="Date Of Birth"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <InputLabel id="gender" style={{ marginTop: 16 }} >Gender *</InputLabel>
                                        <Select
                                            name="gender"
                                            labelId="gender"
                                            id="gender"
                                            required
                                            onChange={this.handleChange}>
                                            <MenuItem value={'M'}>Male</MenuItem>
                                            <MenuItem value={'F'}>Female</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="country"
                                            component={TextField}
                                            type="text"
                                            label="Country of Origin"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <InputLabel style={{ marginTop: 16 }} id="maritalStatus">Marital Status *</InputLabel>
                                        <Select
                                            name="maritalStatus"
                                            labelId="maritalStatus"
                                            id="maritalStatus"
                                            required
                                            onChange={this.handleChange}>
                                            <MenuItem value={'D'}>Divorced</MenuItem>
                                            <MenuItem value={'M'}>Married</MenuItem>
                                            <MenuItem value={'S'}>Single</MenuItem>
                                            <MenuItem value={'W'}>Widow</MenuItem>
                                        </Select>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper style={{ padding: 16 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Current Address
                    </Typography>

                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="postcode"
                                            component={TextField}
                                            type="text"
                                            label="Postcode"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="address"
                                            component={TextField}
                                            type="text"
                                            label="Address"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="yearsAtAddress"
                                            component={TextField}
                                            type="number"
                                            label="Years At Address"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            name="monthsAtAddress"
                                            component={TextField}
                                            type="number"
                                            label="Months At Address"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>
                                </Grid>

                            </Paper>

                            <Paper style={{ padding: 16 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Employment Details
                    </Typography>

                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="occupation"
                                            component={TextField}
                                            type="text"
                                            label="Occupation"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="yearsAtEmployment"
                                            component={TextField}
                                            type="number"
                                            label="Years At Employment"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            name="monthsAtEmployment"
                                            component={TextField}
                                            type="number"
                                            label="Months At Employment"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="grossAnnualSalary"
                                            component={TextField}
                                            type="number"
                                            label="Gross Annual Salary"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                </Grid>

                            </Paper>

                            <Paper style={{ padding: 16 }}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Bank Details
                    </Typography>

                                <Grid container alignItems="flex-start" spacing={2}>
                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="accountName"
                                            component={TextField}
                                            type="text"
                                            label="Account Name"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="accountType"
                                            component={TextField}
                                            type="text"
                                            label="Account Type"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="sortCode"
                                            component={TextField}
                                            type="number"
                                            label="Sort Code"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                    <Grid item xs={8}>
                                        <Field
                                            fullWidth
                                            required
                                            name="accountNumber"
                                            component={TextField}
                                            type="number"
                                            label="Account Number"
                                            onChange={this.handleChange}
                                        />
                                    </Grid>

                                </Grid>
                                <br></br>
                            </Paper>
                            <Grid item style={{ marginTop: 16, marginLeft: 30, marginBottom: 50 }} className="column is-three-fifths is-offset-one-fifth">
                                <Button className="button is-primary is-medium is-fullwidth"
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                // onClick={toProposal}
                                //disabled={submitting}
                                >
                                    Generate Proposal
                  </Button>
                            </Grid>
                            <br></br>

                        </div>

                    </form>
                </div>

            </React.Fragment >
        );
    }


}

ProposalForm.propTypes = {};

ProposalForm.defaultProps = {};
