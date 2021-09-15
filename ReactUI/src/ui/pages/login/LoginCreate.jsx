// import {
// 	makeStyles,
// 	Paper,
// 	Avatar,
// 	CssBaseline,
// 	Typography,
// 	TextField,
// 	Button,
// 	Grid,
// } from "@material-ui/core";
// import "./loginPage.css";
// import Link from '@material-ui/core/Link';
// import Breadcrumbs from "@material-ui/core/Breadcrumbs";
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';

// const LoginCreate = (props) => {
// 	const classStyles = makeStyles((theme) => ({
// 		paper: {
// 			marginTop: theme.spacing(5),
// 			display: "flex",
// 			flexDirection: "column",
// 			alignItems: "center",
// 			padding: 40,
// 		},
// 		avatar: {
// 			margin: theme.spacing(1),
// 			width: theme.spacing(15),
// 			height: theme.spacing(15),
// 		},
// 		form: {
// 			width: "100%",
// 			marginTop: theme.spacing(1),
// 		},
// 		font: {
// 			color: "#11a0bd",
// 		},
// 		title: {
// 			flexGrow: 1
// 		},
// 		button: {
// 			margin: theme.spacing(1),
// 		  },
// 	}));
// 	const classes = classStyles();
// 	const marginTop = { marginTop: 5 }

// 	return (
// 		<div className="Login">
// 			<video src="SnifferDogBlack.mp4" autoPlay loop muted></video>
// 				<Grid container>
// 					<Grid item xs={8}></Grid>
// 					<Grid item xs={3}>
// 					<CssBaseline />
// 					<br></br>
// 					<Paper className={classes.paper}>
//                         <Breadcrumbs aria-label="breadcrumb">
// 							<Link color="inherit" href="/" >
// 								Sign In
// 							</Link>
// 						<Typography color="textPrimary"></Typography>
// 						</Breadcrumbs>
// 						<Breadcrumbs aria-label="breadcrumb">
// 							<Link color="inherit" href="/Create">
// 								Sign Up
// 							</Link>
// 						</Breadcrumbs>
// 						<Avatar
// 							className={classes.avatar}
// 							alt="dog"
// 							src="http://localhost:8081/at14.gif"
// 						></Avatar>
// 						<Typography
// 							component="h1"
// 							variant="h5"
// 							className={classes.font}
// 						>
// 							Create Account
// 						</Typography>
// 						<form>
// 							<TextField fullWidth label='Name' placeholder="Enter your name" />
// 							<TextField fullWidth label='Email' placeholder="Enter your email" />
// 							<FormControl component="fieldset" style={marginTop}>
// 								<FormLabel component="legend">Gender</FormLabel>
// 								<RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
// 									<FormControlLabel value="female" control={<Radio />} label="Female" />
// 									<FormControlLabel value="male" control={<Radio />} label="Male" />
// 								</RadioGroup>
// 							</FormControl>
// 							<TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
// 							<TextField fullWidth label='Password' placeholder="Enter your password"/>
// 							<TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
// 							<FormControlLabel
// 								control={<Checkbox name="checkedA" />}
// 								label="I accept the terms and conditions."
// 							/>
// 							<Button type='submit' variant='contained' color='primary'>Sign up</Button>
//                			 </form>
// 					</Paper>
// 				</Grid>
// 			</Grid>
// 		</div>
// 	);
// };

// export default LoginCreate;
