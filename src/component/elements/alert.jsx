import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function DescriptionAlerts() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity="info">
                <AlertTitle>Why you should chose us</AlertTitle>
                <div>With our NINJA Car Plan, you have 2 car finance options to choose from and you can request as many quotes as you like. It won’t affect your credit score either. Whatever plan you pick, you can use the money to either buy a new or a used car. And what’s even better is you can manage your chosen car finance plan online.</div>
                <br />
                <AlertTitle>Our car finance plans are unique but share some great features:</AlertTitle>
                <ul>
                    <li>Buy your car from a range of selected dealerships</li>
                    <li>No hidden charges like early repayment or settlement fees</li>
                    <li>If you have a problem with the quality of the vehicle you buy, we’ll work with the dealership to sort it out for you.</li>
                </ul>
            </Alert>
        </div>
    );
}