import {
	Container,
	makeStyles,
	Paper,
	Avatar,
	CssBaseline,
	Typography,
	TextField,
	Button,
	Divider,
	Grid,
} from "@material-ui/core";
import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
	console.log(response);
};

const Login = () => {
	const classStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 40,
			height: "60%",
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
					Sign In
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
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<br></br>
					<br></br>
					<Divider variant="middle" />
				</form>

				<div>
					<br></br>
					<Grid align="center">
						<GoogleLogin
							clientId="726629848709-g7mmqrelcc0fauka4vfimnbl16tvp2q5.apps.googleusercontent.com"
							buttonText="Login"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={"single_host_origin"}
						/>
						<br></br>
					</Grid>
				</div>
			</Paper>
		</Container>
	);
};

export default Login;
