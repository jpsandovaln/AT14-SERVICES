import { Card, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const Login = () => {
	const paperStyle = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 40,
			height: "50vh",
		},
	}));
	const classes = paperStyle();
	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper}></Paper>
		</Container>
	);
};

export default Login;
