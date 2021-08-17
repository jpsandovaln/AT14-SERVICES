import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const styles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
}));

const responseGoogle = (response) => {
	console.log(response);
};

const responseFacebook = (response) => {
	console.log(response);
};

const componentClicked = () => {
	console.log("event onClick");
};

const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<h2>Home</h2>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				style={{ minHeight: "100vh" }}
			>
				<Grid item xs={12}>
					<Card>
						<CardMedia
							component="img"
							alt="AT-14"
							width="100%"
							image="http://localhost:8081/at14.gif"
							title="Contemplative Reptile"
						/>
					</Card>
					<br></br>
					<Card>
						<Grid align="center">
							<GoogleLogin
								clientId="726629848709-g7mmqrelcc0fauka4vfimnbl16tvp2q5.apps.googleusercontent.com"
								buttonText="Login"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={"single_host_origin"}
							/>
							<FacebookLogin
								appId="235788085092305"
								autoLoad={true}
								fields="name,email,picture"
								onClick={componentClicked}
								callback={responseFacebook}
							/>
							,
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
