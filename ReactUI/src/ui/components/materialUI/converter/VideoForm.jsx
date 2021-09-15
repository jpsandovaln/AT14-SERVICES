import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

const VideoForm = (promps) => {
	const classes = useStyles();

	return (
		<div>
			<Grid container spacing={2} xs={12}>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardContent>
							<Grid item md={2}>
								<input
									accept="video/*"
									className={classes.input}
									id="contained-button-video"
									name="contained-button-video"
									multiple
									type="file"
									required
									onChange={promps.setFileVideo}
								/>
								<label htmlFor="contained-button-video">
									<Button
										variant="contained"
										color="#83bbeb"
										component="span"
									>
										Upload
									</Button>
								</label>
							</Grid>
							<Grid item md={4} >
								<TextField
									fullWidth
									id="outlined-basic"
									variant="outlined"
									value={promps.nameVideo}
									disabled
								/>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardHeader
							className={classes.title}
							title="Video Processor"
							titleTypographyProps={{ variant: "h7" }}
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
											value={promps.outputFormat}
											onChange={(e) =>
												promps.setOutputFormat(
													e.target.value
												)
											}
											label="Output Format"
											required
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
							</Grid>
						</CardContent>
						<CardContent>
							<Grid container spacing={3}>
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
											value={promps.ratio}
											onChange={(e) =>
												promps.setRatio(e.target.value)
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
							</Grid>
						</CardContent>
						<CardContent>
							<Grid container spacing={3}>
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
											value={promps.scale}
											onChange={(e) =>
												promps.setScale(e.target.value)
											}
											label="Scale"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"1280x720"}>
												1280 x 720
											</MenuItem>
											<MenuItem value={"854x480"}>
												854 x 480
											</MenuItem>
											<MenuItem value={"640x360"}>
												640 x 360
											</MenuItem>
											<MenuItem value={"426x240"}>
												426 x 240
											</MenuItem>
											<MenuItem value={"256x144"}>
												256 x 144
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</CardContent>
						<CardContent>
							<Grid container spacing={3}>
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
											value={promps.quality}
											onChange={(e) =>
												promps.setQuality(
													e.target.value
												)
											}
											label="Quality"
										>
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
											value={promps.angle}
											onChange={(e) =>
												promps.setAngle(e.target.value)
											}
											label="Scale"
										>
											<MenuItem value={"90"}>90</MenuItem>
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
							<Grid container spacing={3}>
								<Grid item xs>
									<FormControlLabel
										control={
											<Checkbox
												checked={promps.hflip}
												onChange={(e) => {
													promps.sethFlip(
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
												checked={promps.vflip}
												onChange={(e) => {
													promps.setvFlip(
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
						<CardContent>
							<Grid container spacing={3}>
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
											value={promps.frameScale}
											onChange={(e) =>
												promps.setFrameScale(
													e.target.value
												)
											}
										>
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
												checked={promps.obtainFrames}
												onChange={(e) => {
													promps.setObtainFrames(
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
						<CardContent>
							<Grid container spacing={3}>
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
											value={promps.audioFormat}
											onChange={(e) =>
												promps.setAudioFormat(
													e.target.value
												)
											}
											label="Audio format"
										>
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
												checked={promps.obtainAudio}
												onChange={(e) => {
													promps.setObtainAudio(
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
			</Grid>
		</div>
	);
};

export default VideoForm;

