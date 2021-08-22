import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const FormMetadata = (classes) => {
	const clase = useStyles();
	return (
		<div>
			<Card className={clase.root}>
				<CardHeader
					title="Metadata extractor"
					className={clase.title}
					titleTypographyProps={{ variant: "h6" }}
				></CardHeader>
				<CardContent>
					<Grid container spacing={1}>
						<Grid item md={12} xs={12}>
							<div className={classes.root}>
								<input
									accept="zip/*"
									className={classes.input}
									id="contained-button-file"
									type="file"
									onChange={(e) =>
										classes.setUploadFile(e.target.files[0])
									}
									required
								/>
							</div>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Button type="submit" variant="contained" color="primary">
						Analyze
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default FormMetadata;
