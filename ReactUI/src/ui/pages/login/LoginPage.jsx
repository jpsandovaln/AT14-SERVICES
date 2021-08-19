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
import "./loginPage.css";

const responseGoogle = (response) => {
	console.log(response);
};

const Login = () => {
	const classStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(30),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 40,

			//backgroundColor: "transparent",
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
		container: {
			opacity: "100",
		},
		font: {
			color: "#11a0bd",
		},
	}));
	const classes = classStyles();

	return (
		<div className="Login">
			<video src="background.mp4" autoPlay loop muted></video>

			<Container
				component="main"
				maxWidth="xs"
				className={classes.container}
			>
				<CssBaseline />
				<br></br>
				<Paper className={classes.paper}>
					<Avatar
						className={classes.avatar}
						alt="dog"
						src="http://localhost:8081/at14.gif"
					></Avatar>
					<Typography
						component="h1"
						variant="h5"
						className={classes.font}
					>
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
							Login
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
		</div>
	);
};

export default Login;
