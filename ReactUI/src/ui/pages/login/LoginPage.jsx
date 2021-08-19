import {
	Container,
	makeStyles,
	Paper,
	Avatar,
	CssBaseline,
	Typography,
	TextField,
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
		form: {
			width: "100%",
			marginTop: theme.spacing(1),
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
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
				</form>
			</Paper>
		</Container>
	);
};

export default Login;
