import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import useStyles from "./styles";

const Spinner = () => {
	const [ loading, setLoading ] = useState( true );
	const classes = useStyles();

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading( false );
		}, 2000);

		return () => clearTimeout( timer );
	}, [ loading ]);
  
	return (
	  <div className={ classes.wrapper }>
		<Loader
		  type="TailSpin"
		  color="#1E90E6"
		  height={ 80 }
		  width={ 80 }
		  visible={ loading }
		/>
	  </div>
	);
};
  
export default Spinner;