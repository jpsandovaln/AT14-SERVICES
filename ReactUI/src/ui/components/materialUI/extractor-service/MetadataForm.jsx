import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(() => ({
	card: {
		height: "100%",
	},
	input: {
		display: "none",
	},
	root: {
		width: 300,
	},
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const MetadataForm = (promps) => {
	const classes = useStyles();

	return (
		<div>
			<Grid container spacing={3} xs={12}>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardContent>
							<input
								accept="file/"
								className={classes.input}
								id="contained-button-file"
								multiple
								type="file"
								required
							/>
							<label htmlFor="contained-button-file">
								<Button
									variant="contained"
									color="primary"
									component="span"
								>
									Upload
								</Button>
							</label>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default MetadataForm;