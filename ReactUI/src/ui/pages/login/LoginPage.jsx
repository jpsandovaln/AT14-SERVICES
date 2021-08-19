import {
	Container,
	makeStyles,
	Paper,
	Avatar,
	CssBaseline,
} from "@material-ui/core";
import React from "react";

const Login = () => {
	const classStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 40,
			height: "50vh",
		},
		avatar: {
			margin: theme.spacing(1),
			width: theme.spacing(15),
			height: theme.spacing(15),
		},
	}));
	const classes = classStyles();
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar
					className={classes.avatar}
					alt="dog"
					src="http://localhost:8081/at14.gif"
				></Avatar>
			</Paper>
		</Container>
	);
};

export default Login;
