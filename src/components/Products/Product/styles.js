import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	root: {
		maxWidth: "100%"
	},
	media: {
		height: 0,
		paddingTop: "56.25%"
	},
	cardEntry: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	cardTitle: {
		fontSize: "30px"
	},
	cardPrice: {
		fontSize: "25px"
	},
	cardDescription: {
		paddingTop: "10px",
		fontSize: "20px"
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end"
	},
	cardContent: {
		display: "flex",
		flexDirection: "column"
	}
}));