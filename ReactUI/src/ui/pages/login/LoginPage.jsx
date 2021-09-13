import {
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
import GoogleLogin from "react-google-login";
import "./loginPage.css";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useState } from "react";

const Login = (props) => {
	const handleChange = (e) => {
		console.log(e.target.value);
		setBody({
			...body,
			[e.target.name]: e.target.value,
		});
	};

	const logginSuccess = (res) => {
		props.setIsLogin(true);
		props.history.push("/home");
		props.setUserInfo(res.profileObj);
	};

	const logginFailure = (res) => {
		console.log("Failed loggin:", res);
		props.setIsLogin(false);
	};

	const [body, setBody] = useState({ email: " ", password: " " });

	const classStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(10),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			padding: 40,
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
		font: {
			color: "#11a0bd",
		},
		title: {
			flexGrow: 1,
		},
		button: {
			margin: theme.spacing(1),
		}
	}));
	const classes = classStyles();

	return (
		<div className="Login">
			<Grid container>
				<Grid item xs={7}>
					<Paper className={`${classes.paper} paperVideo`}>
						<video
							src="SnifferDogBlack.mp4"
							autoPlay
							loop
							muted
						></video>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<CssBaseline />
					<Paper className={`${classes.paper} paperLogin`}>
						<Breadcrumbs aria-label="breadcrumb">
							<Link color="inherit" href="/">
								Sign In
							</Link>
							<Typography color="textPrimary"></Typography>
						</Breadcrumbs>
						<Breadcrumbs aria-label="breadcrumb">
							<Link color="inherit" href="/Create">
								Sign Up
							</Link>
						</Breadcrumbs>
						<Avatar
							className={classes.avatar}
							alt="dog"
							src="/at14.gif"
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
								value={body.email}
								onChange={handleChange}
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
								value={body.password}
								onChange={handleChange}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.button}
								onClick={() => props.history.push("/home")}
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
									onSuccess={logginSuccess}
									onFailure={logginFailure}
									cookiePolicy={"single_host_origin"}
								/>
								<br></br>
							</Grid>
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Login;
