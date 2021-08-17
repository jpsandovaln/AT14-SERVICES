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

const FormML = (classes) => {
	const clase = useStyles();
	return (
		<div>
			<Card className={clase.root}>
				<CardHeader
					title="Machine Learning Analizer"
					className={clase.title}
					titleTypographyProps={{ variant: "h6" }}
				></CardHeader>
				<CardContent>
					<Grid container spacing={1}>
						<Grid item md={4} xs={12} spacing={1}>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Search word"
								variant="outlined"
								placeholder={"SearchWord"}
								onChange={(e) =>
									classes.setSearchWord(e.target.value)
								}
								required
							/>
						</Grid>
						<Grid item md={4} xs={12} spacing={1}>
							<FormControl
								variant="outlined"
								className={classes.formControl}
								fullWidth
							>
								<InputLabel id="demo-simple-select-percentage-label">
									Percentage
								</InputLabel>
								<Select
									labelId="demo-simple-select-percentage-label"
									id="demo-simple-select-percentage"
									value={classes.percentage}
									onChange={(e) =>
										classes.setPercentage(e.target.value)
									}
									label="Percentage"
									required
								>
									<MenuItem value="">
										<em>-</em>
									</MenuItem>
									<MenuItem value={0.1}>10%</MenuItem>
									<MenuItem value={0.2}>20%</MenuItem>
									<MenuItem value={0.3}>30%</MenuItem>
									<MenuItem value={0.4}>40%</MenuItem>
									<MenuItem value={0.5}>50%</MenuItem>
									<MenuItem value={0.6}>60%</MenuItem>
									<MenuItem value={0.7}>70%</MenuItem>
									<MenuItem value={0.8}>80%</MenuItem>
									<MenuItem value={0.9}>90%</MenuItem>
									<MenuItem value={1.0}>100%</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item md={4} xs={12} spacing={1}>
							<FormControl
								variant="outlined"
								className={classes.formControl}
								fullWidth
							>
								<InputLabel id="demo-simple-select-outlined-label">
									Algorithm
								</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									value={classes.algorithm}
									onChange={(e) =>
										classes.setAlgorithm(e.target.value)
									}
									label="Algorithm"
									required
								>
									<MenuItem value="">
										<em>-</em>
									</MenuItem>
									<MenuItem value={"CocoSSD"}>
										CocoSSD
									</MenuItem>
									<MenuItem value={"MobilNet"}>
										MobilNet
									</MenuItem>
								</Select>
							</FormControl>
						</Grid>
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

export default FormML;
