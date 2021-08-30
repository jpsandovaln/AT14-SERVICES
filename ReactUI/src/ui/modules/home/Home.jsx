import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	}
}));

const Home = () => {
	const classes = styles();
	return (
		<div className={classes.root}>
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
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
