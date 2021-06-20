/* eslint-disable react/prop-types */
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import {
    TextField,
    Grid
} from "@material-ui/core";

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    const error = false;
    
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                as={ TextField }
                name={ name }
                control={ control }
                fullWidth
                label={ label }
                required={required}
                error={ error }
            />
        </Grid>
    );
};

export default FormInput;
