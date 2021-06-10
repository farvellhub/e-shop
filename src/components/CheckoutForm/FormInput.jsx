import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { Controller } from "react-hook-form";


const FormInput = () => {
	return (
		<Grid item xs={12} sm={6}>
			<Controller
				as={ TextField }
				// control={ control }
				// fullWidth
				// name={label}
				// required={required}
			/>
		</Grid>
	);
};

export default FormInput;
