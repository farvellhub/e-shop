import React from "react";

import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    CircularProgress,
    Divider,
    Button
} from "@material-ui/core";

import useStyles from "./styles";

const steps = [ "Shipping address", "Payment details" ];

const Checkout = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={ classes.toolbar } />
            <main className={ classes.layout }>
                <Paper className={ classes.paper }>
                    <Typography variant="h4" align="center">
                        Checkout
                    </Typography>

                    <Stepper activeStep={0} className={ classes.stepper }>
                        {
                            steps
                        }
                    </Stepper>

                </Paper>

            </main>
        </>
    )
}

export default Checkout;
