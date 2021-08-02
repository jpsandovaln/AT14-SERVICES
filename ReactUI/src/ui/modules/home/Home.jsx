import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core";

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

const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
			<h2>Home</h2>
		</div>
	);
};

export default Home;
