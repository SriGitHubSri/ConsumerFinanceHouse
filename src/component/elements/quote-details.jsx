import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlertHP from './alerthp';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function QuoteDetails(QuoteState) {
    console.log("quote state in detais", QuoteState);
    console.log("quote PCP", QuoteState.PCPQuoteresponse);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleHPProduct = (event) => {
        QuoteState.toProposal("HP");
    };

    const handlePCPProduct = (event) => {
        QuoteState.toProposal("PCP");
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Hire Purchase (HP)" {...a11yProps(0)} />
                    <Tab label="Personal Contract purchase (PCP)" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <AlertHP />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Key facts</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div>Our Fixed Car Plan, also known as a Hire Purchase, is the simplest type of car finance we offer.</div>
                                <br />
                                <div>Some key facts for you to consider:</div>
                                <ul>
                                    <li>You might need to pay a deposit.</li>
                                    <li>Decide how much you want to borrow and over how many months you want to pay back.</li>
                                    <li>No hidden surprises—once you've paid the final payment the car is all yours.</li>
                                    <li>During your Hire Purchase agreement, the car will still be owned by Halifax. Which means you can’t sell it or make alterations until you’ve paid your final payment.</li>
                                    <li>You can pay off your agreement early should you wish to.</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>What could my payments look like?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div>Our Fixed Car Plan, also known as a Hire Purchase, is the simplest type of car finance we offer.</div>
                                <br />
                                <div className="table columns">
                                    <div className="column is-three-fifths">
                                        <div className="columns">
                                            <div className="table-cell column">
                                                <span>
                                                    {/* {QuoteState.term} */}
                                                    {" monthly payments of"}
                                                </span>
                                            </div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.HPQuoteResults.monthly_payment_amount}{" "}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Term of agreement</div>
                                            <div className="table-cell column">
                                                <span> {QuoteState.term} </span>
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="table-cell column">First payment</div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.HPQuoteResults.first_payment_amount}{" "}
                                                </span>
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="table-cell column">Final payment</div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.HPQuoteResults.monthly_payment_amount}{" "}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Cash price</div>
                                            <div className="table-cell column">
                                                {<span> {"£"}{QuoteState.HPQuotefinancial.cash_price} </span>}
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Your deposit</div>
                                            <div className="table-cell column">
                                                {<span> {"£"}{QuoteState.HPQuotefinancial.deposit_amount} </span>}
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="table-cell column">Total Deposit</div>
                                            <div className="table-cell column">
                                                <span> {"£"}{QuoteState.HPQuotefinancial.deposit_amount} </span>
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="table-cell column">Amount of credit</div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.HPQuoteResults.amount_of_credit}{" "}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Total charge for credit</div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.HPQuoteResults.total_charge_for_credit}{" "}
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="table-cell column">Fixed rate of interest</div>
                                            <div className="table-cell column">
                                                <span> {QuoteState.HPQuoteResults.fixed_rate_interest} {"%"}</span>
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="table-cell column">A.P.R</div>
                                            <div className="table-cell column">
                                                <span> {QuoteState.HPQuoteResults.apr} {"% A.P.R"}</span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Total amount payable</div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.HPQuoteResults.total_amount_payable}{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <div className="columns is-mobile">
                        <div className="column is-three-fifths is-offset-one-fifth">
                            <button
                                className="button is-primary is-medium is-fullwidth"
                                onClick={handleHPProduct}
                            >
                                Choose HP quote
                            </button>
                        </div>
                    </div>
                    <br />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <AlertHP />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Key facts</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div>Our Flex Car Plan, also known as a personal contract purchase, is perfect for people who want lower monthly payments and like to change their car often.</div>
                                <br />
                                <div>Some key facts for you to consider:</div>
                                <ul>
                                    <li>Paying a deposit will make your monthly payments lower.</li>
                                    <li>Decide how much you want to borrow over how many months.</li>
                                    <li>Your monthly payments will be lower compared to Fixed Car Plan, however you will pay more interest overall.</li>
                                    <li>You’ll agree an annual mileage limit.</li>
                                    <li>You can own the car at the end of the agreement if you pay the lump sum final payment. Or you could just hand the car back (return conditions apply).</li>
                                    <li>You will be charged extra fees if you return your car and it has exceeded the maximum agreed mileage or if it is not in good condition (fair wear and tear accepted).</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className={classes.heading}>What could my payments look like?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div>Our Fixed Car Plan, also known as a Personal Contract Purchase, is the simplest type of car finance we offer.</div>
                                <br />
                                <div className="table columns">
                                    <div className="column is-three-fifths">
                                        <div className="columns">
                                            <div className="table-cell column">
                                                <span>
                                                    {/* {QuoteState.term} */}
                                                    {" monthly payments of"}
                                                </span>
                                            </div>
                                            <div className="table-cell column">
                                                <span>
                                                    {"£"}
                                                    {QuoteState.PCPQuoteresponse.monthly_payment_amount}{" "}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Term of agreement</div>
                                            <div className="table-cell column">
                                                <span>
                                                    {QuoteState.term}
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="table-cell column">First payment</div>
                                            <div className="table-cell column">
                                                <span> {"£"} {QuoteState.PCPQuoteresponse.first_payment_amount} </span>
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="table-cell column">Optional final payment</div>
                                            <div className="table-cell column">
                                                <span> {"£"} {QuoteState.PCPQuoteresponse.final_payment_amount} </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Cash price</div>
                                            <div className="table-cell column">
                                                <span> {"£"} {QuoteState.HPQuotefinancial.cash_price} </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Your deposit</div>
                                            <div className="table-cell column">
                                                {<span> {"£"}{QuoteState.HPQuotefinancial.deposit_amount} </span>}
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="table-cell column">Total Deposit</div>
                                            <div className="table-cell column">
                                                {<span> {"£"}{QuoteState.HPQuotefinancial.deposit_amount} </span>}
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="table-cell column">Amount of credit</div>
                                            <div className="table-cell column">
                                                <span> {"£"} {QuoteState.PCPQuoteresponse.amount_of_credit} </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Total charge for credit</div>
                                            <div className="table-cell column">
                                                <span> {"£"} {QuoteState.PCPQuoteresponse.total_charge_for_credit} </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Annual mileage</div>
                                            <div className="table-cell column">
                                                <span> {""} {QuoteState.PCPQuoteresponse.max_annual_mileage} </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Excess mileage</div>
                                            <div className="table-cell column">
                                                <span> {"£"}
                                                    {/* {QuoteState.PCPQuoteresponse.excess_mileage}  */}
                                                    {" 3 ppm"} </span>
                                            </div>
                                        </div>
                                        {/* <div className="columns">
                                            <div className="table-cell column">Fixed rate of interest</div>
                                            <div className="table-cell column">
                                                <span> {QuoteState.PCPQuoteresponse.fixed_rate_interest} {"%"} </span>
                                            </div>
                                        </div> */}
                                        <div className="columns">
                                            <div className="table-cell column">A.P.R</div>
                                            <div className="table-cell column">
                                                <span> {QuoteState.PCPQuoteresponse.apr} {"% A.P.R"} </span>
                                            </div>
                                        </div>
                                        <div className="columns">
                                            <div className="table-cell column">Total amount payable</div>
                                            <div className="table-cell column">
                                                <span> {"£"} {QuoteState.PCPQuoteresponse.total_amount_payable} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <br />
                    <div className="columns is-mobile">
                        <div className="column is-three-fifths is-offset-one-fifth">
                            <button
                                className="button is-primary is-medium is-fullwidth"
                                onClick={handlePCPProduct}
                            >
                                Choose PCP quote
                            </button>
                        </div>
                    </div>
                    <br />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
