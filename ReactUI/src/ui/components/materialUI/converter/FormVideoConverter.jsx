import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(() => ({
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

const FormVideoConveter = () => {
	const urlML = "http://localhost:8080/imageFinder";
	const classes = useStyles();

	const [data, setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [ratio, setRatio] = React.useState("");
	const [scale, setScale] = React.useState("");
	const [audioFormat, setAudioFormat] = React.useState("");
	const [quality, setQuality] = React.useState("");
	const [angle, setAngle] = React.useState("");
	const [hflip, sethFlip] = React.useState(false);
	const [vflip, setvFlip] = React.useState(false);
	const [frameScale, setFrameScale] = React.useState("");
	const [obtainFrames, setObtainFrames] = React.useState(false);
	const [extractAudioFormat, setExtractAudioFormat] = React.useState("");
	const [obtainAudio, setObtainAudio] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("ratio", ratio);
		dataArray.append("scale", scale);
		dataArray.append("quality", quality);
		dataArray.append("angle", angle);
		dataArray.append("vflip", vflip);
		dataArray.append("hflip", hflip);
		dataArray.append("outputFormat", outputFormat);
		dataArray.append("audioFormat", audioFormat);
		dataArray.append("obtainFrames", obtainFrames);
		dataArray.append("frameScale", frameScale);
		dataArray.append("obtainAudio", obtainAudio);

		dataArray.append("extractAudioFormat", extractAudioFormat);

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
									accept="video/"
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
								title="Video Format"
								titleTypographyProps={{variant:'h6' }}
							/>
							<CardContent>
								<Grid container spacing={3}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Output Format
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={outputFormat}
												onChange={(e) =>
													setOutputFormat(
														e.target.value
													)
												}
												label="Output Format"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={".mp4"}>
													.mp4
												</MenuItem>
												<MenuItem value={".mov"}>
													.mov
												</MenuItem>
												<MenuItem value={".wmv"}>
													.wmv
												</MenuItem>
												<MenuItem value={".avi"}>
													.avi
												</MenuItem>
												<MenuItem value={".flv"}>
													.flv
												</MenuItem>
												<MenuItem value={".mkv"}>
													.mkv
												</MenuItem>
												<MenuItem value={".webm"}>
													.webm
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Fps
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={ratio}
												onChange={(e) =>
													setRatio(e.target.value)
												}
												label="Fps"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												{[...Array(24)].map((x, i) => (
													<MenuItem value={i + 1}>
														{i + 1}
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Scale
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={scale}
												onChange={(e) =>
													setScale(e.target.value)
												}
												label="Scale"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={"1280 x 720"}>
													1280 x 720
												</MenuItem>
												<MenuItem value={"854 x 480"}>
													854 x 480
												</MenuItem>
												<MenuItem value={"640 x 360"}>
													640 x 360
												</MenuItem>
												<MenuItem value={"426 x 240"}>
													426 x 240
												</MenuItem>
												<MenuItem value={"256 x 144"}>
													256 x 144
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
											<InputLabel id="demo-simple-select-outlined-label">
												Audio format
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={audioFormat}
												onChange={(e) =>
													setAudioFormat(
														e.target.value
													)
												}
												label="Audio format"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={".mp3"}>
													.mp3
												</MenuItem>
												<MenuItem value={".mp2"}>
													.mp2
												</MenuItem>
												<MenuItem value={".wma"}>
													.wma
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Quality
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={quality}
												onChange={(e) =>
													setQuality(e.target.value)
												}
												label="Quality"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												{[...Array(31)].map((x, i) => (
													<MenuItem value={i + 1}>
														{i + 1}
													</MenuItem>
												))}
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
								title="Flip and rotate"
								titleTypographyProps={{variant:'h6' }}
							/>
							<CardContent>
								<Grid container spacing={3}>
									<Grid item xs>
										<FormControl
											variant="outlined"
											className={classes.formControl}
											fullWidth
										>
											<InputLabel id="demo-simple-select-outlined-label">
												Rotate
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={angle}
												onChange={(e) =>
													setAngle(e.target.value)
												}
												label="Scale"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={"90"}>
													90
												</MenuItem>
												<MenuItem value={"180"}>
													180
												</MenuItem>
												<MenuItem value={"270"}>
													270
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
								</Grid>
								<Grid container spacing={6}>
									<Grid item xs>
										<FormControlLabel
											control={
												<Checkbox
													checked={hflip}
													onChange={(e) => {
														sethFlip(
															e.target.checked
														);
													}}
													name="flipHorizon"
													color="primary"
												/>
											}
											label="Flip Horizon"
										/>
									</Grid>

									<Grid item xs>
										<FormControlLabel
											control={
												<Checkbox
													checked={vflip}
													onChange={(e) => {
														setvFlip(
															e.target.checked
														);
													}}
													name="flipVertical"
													color="primary"
												/>
											}
											label="Flip Vertical"
										/>
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
								title="Video Format"
								titleTypographyProps={{variant:'h6' }}
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
												Frames
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Frames"
												value={frameScale}
												onChange={(e) =>
													setFrameScale(
														e.target.value
													)
												}
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={"854"}>
													854
												</MenuItem>
												<MenuItem value={"640"}>
													640
												</MenuItem>
												<MenuItem value={"520"}>
													520
												</MenuItem>
												<MenuItem value={"426"}>
													426
												</MenuItem>
												<MenuItem value={"360"}>
													360
												</MenuItem>
												<MenuItem value={"256"}>
													256
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs>
										<FormControlLabel
											control={
												<Checkbox
													checked={obtainFrames}
													onChange={(e) => {
														setObtainFrames(
															e.target.checked
														);
													}}
													name="obtainFrames"
													color="primary"
												/>
											}
											label="Obtain frames"
										/>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<br></br>
						<Card className={classes.paper}>
							<CardHeader
								className={classes.title}
								title="Obtain Audio"
								titleTypographyProps={{variant:'h6' }}
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
												Audio format
											</InputLabel>
											<Select
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												value={extractAudioFormat}
												onChange={(e) =>
													setExtractAudioFormat(
														e.target.value
													)
												}
												label="Audio format"
											>
												<MenuItem value="">
													<em>-</em>
												</MenuItem>
												<MenuItem value={".mp3"}>
													.mp3
												</MenuItem>
												<MenuItem value={".mp2"}>
													.mp2
												</MenuItem>
												<MenuItem value={".wma"}>
													.wma
												</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs>
										<FormControlLabel
											control={
												<Checkbox
													checked={obtainAudio}
													onChange={(e) => {
														setObtainAudio(
															e.target.checked
														);
													}}
													name="obtainAudio"
													color="primary"
												/>
											}
											label="Obtain Audio"
										/>
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
								titleTypographyProps={{variant:'h6' }}
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

export default FormVideoConveter;
