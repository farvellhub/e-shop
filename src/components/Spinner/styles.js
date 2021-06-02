import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  wrapper: {
	  position: "fixed",
	  top: 0,
	  left: 0,
	  display: "flex",
	  justifyContent: "center",
	  alignItems: "center",
	  width: "100vw",
	  height: "100vh",
	  zIndex: 1004
  }
}));