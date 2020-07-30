export const GENERATE_PROPOSAL = "GENERATE_PROPOSAL";
export const SUCCESS_PROPOSAL = "SUCCESS_PROPOSAL";
export const FAIL_PROPOSAL = "SUCCESS_PROPOSAL";


export const getProposal = (json) => ({
    type: GENERATE_PROPOSAL,
    json: json,
});

export const SuccessProposal = (json) => ({
    type: SUCCESS_PROPOSAL,
    json: json,
});

export const FailProposal = (json) => ({
    type: FAIL_PROPOSAL,
    json: json,
});


///Get Proposal Details
export function generateProposal(proposalInput) {
    console.log("proposal action method");
    return function (dispatch) {
        return fetch(
            `http://51.132.233.171:44301/api/v1/proposals`, {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "x-rapidapi-key": "apikey",
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                // proposalInput
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
            })
        })
            .then(
                (response) => response.json(),
                (error) => console.log("An error occurred.", error)
            )
            .then((json) => {
                console.log(json);
                if (json.proposal_ref_number) {
                    console.log('Success from action', json);
                    dispatch(SuccessProposal(json.decision.decision_message));
                }
                else if (json.status_code === 422) {
                    console.log('fail422', json.messages);
                    dispatch(FailProposal(json.messages));
                }
                else {
                    console.log(json);
                    console.log('fail');
                    console.log(json);
                }
            })
            .catch(error => {
                dispatch(FailProposal(error));
            })
    };
}