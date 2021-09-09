import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "@material-ui/core";

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
							<Grid item md={12} xs={12}>
								<div className={classes.root}>
									<input
										accept="zip/*"
										className={classes.input}
										id="matadata-button-file"
										name="matadata-button-file"
										type="file"
										required
										onChange={promps.setFileVideo}
									/>
									<label htmlFor="matadata-button-file">
										<Button
											variant="contained"
											color="#83bbeb"
											component="span"
										>
											Upload
										</Button>
										<InputLabel></InputLabel>
									</label>
								</div>

								<Grid item md={4}>
									<TextField
										fullWidth
										id="outlined-basic"
										variant="outlined"
										value={promps.nameVideo}
										disabled
									/>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default MetadataForm;
