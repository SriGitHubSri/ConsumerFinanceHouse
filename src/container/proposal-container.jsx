import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ProposalForm } from '../component/form/proposal-form';
import * as Navigate from '../constants/routes-constant';
import { generateProposal } from "../actions/proposal-actions";

const ProposalPageContainer = new reduxForm({
    form: 'porposalform'
})(ProposalForm);

export const mapStateToProps = state => ({
    fullState: state,
    vehicleDetails: state.financeHouse.vehicleDetails[0],
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
    toProposal: (customerState) => {
        // console.log(customer);

        const proposalInput = [
            {
                // dealer_id: "54000001",
                // financial: {
                //     product: "PCP",
                //     cash_price: 10000,
                //     deposit_amount: 2000,
                //     term: 12
                // },
                // vehicle: {
                //     vehicle_code: "vh01",
                //     vehicle_mileage: 5000,
                //     registration_month: 1,
                //     registration_year: 2020,
                //     make: "Ford",
                //     model: "Focus",
                //     description: "2019 model",
                //     model_year: 2019
                // },
                // excess_mileage: 0,
                // max_annual_mileage: 6000,
                // first_payment_amount: 113.91,
                // monthly_payment_amount: 113.91,
                // final_payment_amount: 6500,
                // amount_of_credit: 8000,
                // total_charge_for_credit: 1120,
                // fixed_rate_interest: 7,
                // apr: 7,
                // total_amount_payable: 9120,
                // customer: {
                //     title: customerState.title,
                //     fore_name: customerState.foreName,
                //     middle_name: customerState.middleName,
                //     surname: customerState.surName,
                //     date_of_birth: customerState.dob,
                //     email: customerState.email,
                //     phone: customerState.telephone,
                //     gender: customerState.gender,
                //     marital_status: customerState.maritalStatus,
                //     country_of_origin: customerState.country,
                //     address: {
                //         address1: customerState.address,
                //         address2: '',
                //         address3: '',
                //         postcode: customerState.postcode,
                //         town: '',
                //         city: '',
                //         time_at_address: customerState.yearsAtAddress
                //     },
                //     employment: {
                //         occupation: customerState.occupation,
                //         years_at_employment: customerState.yearsAtAddress,
                //         months_at_employment: customerState.monthsAtEmployment,
                //         gross_annual_salary: customerState.grossAnnualSalary
                //     },
                //     bank_account: {
                //         account_name: customerState.accountName,
                //         account_number: customerState.accountNumber,
                //         sort_code: customerState.sortCode
                //     }
                // }
                dealer_id: "54000001",
                financial: {
                    product: "PCP",
                    cash_price: 10000,
                    deposit_amount: 2000,
                    term: 12
                },
                vehicle: {
                    vehicle_code: "vh01",
                    vehicle_mileage: 5000,
                    registration_month: 1,
                    registration_year: 2020,
                    make: "Ford",
                    model: "Focus",
                    description: "2019 model",
                    model_year: 2019
                },
                excess_mileage: 0,
                max_annual_mileage: 6000,
                first_payment_amount: 113.91,
                monthly_payment_amount: 113.91,
                final_payment_amount: 6500,
                amount_of_credit: 8000,
                total_charge_for_credit: 1120,
                fixed_rate_interest: 7,
                apr: 7,
                total_amount_payable: 9120,
                customer: {
                    title: "Mr",
                    fore_name: "Kannan",
                    middle_name: null,
                    surname: "Sankaranarayanan",
                    date_of_birth: "01/10/1990",
                    email: "abc@xyz.co.uk",
                    phone: "07466371083",
                    gender: "M",
                    marital_status: "S",
                    country_of_origin: "UK",
                    address: {
                        address1: "Address 1",
                        address2: "Address 2",
                        address3: "Address 3",
                        postcode: "CFH0 5BR",
                        town: "Grangetown",
                        city: "Cardiff",
                        time_at_address: 36
                    },
                    employment: {
                        occupation: "Manager",
                        years_at_employment: 5,
                        months_at_employment: 11,
                        gross_annual_salary: 10000
                    },
                    bank_account: {
                        account_name: "Kannan",
                        account_number: 12345678,
                        sort_code: 12345
                    }
                }
            }
        ]

        console.log(JSON.stringify({ proposalInput }));
        dispatch(generateProposal(proposalInput));

        ownProps.history.push(Navigate.TO_PROPOSAL_DECISION);
    },
    getProposalDetails: (customerState) => {

    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProposalPageContainer);