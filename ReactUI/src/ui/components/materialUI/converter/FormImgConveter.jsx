import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
	paper: {},
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
		//fontStyle: "italic",
	},
}));

const FormImgConverter = () => {
	const classes = useStyles();

	const [data, setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [imageSize, setImageSize] = React.useState("");
	const [audioFormat, setAudioFormat] = React.useState("");
	const [dubling, setDubling] = React.useState("");
	const [paintEffect, setPaintEffect] = React.useState("");
	const [greyScale, setGreyScale] = React.useState("");
	const [monochrome, setMonochrome] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		const urlML = "http://localhost:8080/imageFinder";
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("outputFormat", outputFormat);
		dataArray.append("imageSize", imageSize);
		dataArray.append("audioFormat", audioFormat);
		dataArray.append("dubling", dubling);
		dataArray.append("paintEffect", paintEffect);
		dataArray.append("greyScale", greyScale);
		dataArray.append("monochrome", monochrome);

		const fetchData = () => {
			axios
				.post(urlML, dataArray, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					setResponse(res.data);
					setOpen(false);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchData();
	};

	return (
		<div>
			<form onSubmit={submitFormVideo}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Card className={classes.paper}>
							<CardContent>
								<input
									accept="image/*"
									className={classes.input}
									id="contained-button-file"
									multiple
									type="file"
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
					<Grid item xs={7}>
						<Card className={classes.paper}>
							<CardHeader
								className={classes.title}
								title="Image Format"
								titleTypographyProps={{ variant: "h6" }}
							/>
							<CardContent>
								<Grid container spacing={6}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Output Formart
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Output Format"
												value={outputFormat}
												onChange={(e) =>
													setOutputFormat(
														e.target.value
													)
												}
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={"Output1"}>
													Output1
												</MenuItem>
												<MenuItem value={"Output2"}>
													Output2
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								<Grid container spacing={6}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<div className={classes.root}>
												<Typography
													id="discrete-slider-small-steps"
													gutterBottom
												>
													Image Size
												</Typography>
												<Slider
													value={imageSize}
													onChange={(e, newValue) => {
														setImageSize(newValue);
													}}
													defaultValue={30}
													track={imageSize}
													aria-labelledby="discrete-slider"
													valueLabelDisplay="auto"
													step={10}
													marks
													min={10}
													max={110}
												/>
											</div>
										</FormControl>
									</Grid>
								</Grid>

								<Grid container spacing={6}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Audio format
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Audio format"
												value={audioFormat}
												onChange={(e) =>
													setAudioFormat(
														e.target.value
													)
												}
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={"Audio1"}>
													Audio1
												</MenuItem>
												<MenuItem value={"Audio2"}>
													Audio2
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={5}>
						<Card className={classes.paper}>
							<CardHeader
								className={classes.title}
								title="Effects"
								titleTypographyProps={{ variant: "h6" }}
							/>
							<CardContent>
								<Grid container spacing={3}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<div className={classes.root}>
												<Typography
													id="discrete-slider-small-steps"
													gutterBottom
												>
													Dubling
												</Typography>
												<Slider
													value={dubling}
													onChange={(e, newValue) => {
														setDubling(newValue);
													}}
													defaultValue={30}
													track={dubling}
													aria-labelledby="discrete-slider"
													valueLabelDisplay="auto"
													step={10}
													marks
													min={10}
													max={110}
												/>
											</div>
										</FormControl>
									</Grid>
								</Grid>
								<Grid container spacing={6}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<div className={classes.root}>
												<Typography
													id="discrete-slider-small-steps"
													gutterBottom
												>
													Paint Effect
												</Typography>
												<Slider
													value={paintEffect}
													onChange={(e, newValue) => {
														setPaintEffect(
															newValue
														);
													}}
													defaultValue={30}
													track={paintEffect}
													aria-labelledby="discrete-slider"
													valueLabelDisplay="auto"
													step={10}
													marks
													min={10}
													max={110}
												/>
											</div>
										</FormControl>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>

				<Grid container spacing={3}>
					<Grid item xs={5}>
						<Card className={classes.paper}>
							<CardHeader
								className={classes.title}
								title="Filters"
								titleTypographyProps={{ variant: "h6" }}
							/>
							<CardContent>
								<Grid container spacing={6}>
									<Grid item xs>
										<FormControl component="fieldset">
											<FormControlLabel
												control={
													<Checkbox
														checked={monochrome}
														onChange={(e) => {
															setMonochrome(
																e.target.checked
															);
														}}
														name="monochrome"
														color="primary"
													/>
												}
												label="Monochrome"
											/>
											<FormControlLabel
												control={
													<Checkbox
														checked={greyScale}
														onChange={(e) => {
															setGreyScale(
																e.target.checked
															);
														}}
														name="greyScale"
														color="primary"
													/>
												}
												label="Grey Scale"
											/>
										</FormControl>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={7}>
						<Card className={classes.paper}>
							<CardHeader
								className={classes.title}
								title="Results"
								titleTypographyProps={{ variant: "h6" }}
							/>
							<CardContent>
								<Grid container spacing={3}>
									<Grid item xs>
										<Button
											type="submit"
											variant="contained"
											color="primary"
										>
											Convert
										</Button>
									</Grid>
								</Grid>
								<Grid container spacing={6}>
									<Grid item xs>
										<TableContainer component={Paper}>
											<Table
												className={classes.table}
												size="small"
												aria-label="a dense table"
											>
												<TableHead>
													<TableRow>
														<TableCell>
															Algorithm
														</TableCell>
														<TableCell align="right">
															Word
														</TableCell>
														<TableCell align="right">
															Percentage
														</TableCell>
														<TableCell align="right">
															Second
														</TableCell>
														<TableCell align="right">
															Image
														</TableCell>
														<TableCell align="right">
															Options
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													<TableRow>
														<TableCell align="right">
															123
														</TableCell>
														<TableCell align="right">
															asd
														</TableCell>
														<TableCell align="right">
															123
														</TableCell>
														<TableCell align="right">
															asd
														</TableCell>
														<TableCell align="right">
															123
														</TableCell>
														<TableCell align="right">
															asd
														</TableCell>
													</TableRow>
												</TableBody>
											</Table>
										</TableContainer>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</form>
		</div>
	);
};

export default FormImgConverter;
