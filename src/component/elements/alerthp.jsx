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
                <AlertTitle>Few details that you should know</AlertTitle>
                <div>Our Fixed Car Plan, also known as a Hire Purchase (HP) car finance, might be the best match for you. Here’s why:</div>
                <br />
                <ul>
                    <li>Own the vehicle at the end of the agreement</li>
                    <li>Make fixed monthly payments</li>
                    <li>No lump sum payment at the end of the agreement</li>
                    <li>A choice of payment terms between 1 and 5 years.</li>
                </ul>
            </Alert>
        </div>
    );
}