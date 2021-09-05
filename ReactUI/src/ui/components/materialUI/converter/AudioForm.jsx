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

const useStyles = makeStyles(() => ({
	card: {
		height: "100%",
	},
	input: {
		display: "none",
	},
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const AudioForm = (promp) => {
	const classes = useStyles();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardContent>
						<input
							accept="image/*"
							className={classes.input}
							id="contained-button-file"
							multiple
							type="file"
							required
						/>
						<label htmlFor="contained-button-file">
							<Button
								variant="contained"
								color="default"
								component="span"
							>
								Upload
							</Button>
						</label>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.title}
						title="Audio Processor"
						titleTypographyProps={{ variant: "h7" }}
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
										Output Format
									</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										label="Output Format"
										value={promp.outputFormat}
										onChange={(e) =>
											promp.setOutputFormat(
												e.target.value
											)
										}
										required
									>
										<MenuItem value="">
											<em>-</em>
										</MenuItem>
										<MenuItem value={"Output1"}>
											.wav
										</MenuItem>
										<MenuItem value={"Output2"}>
											.mp2
										</MenuItem>
										<MenuItem value={"Output3"}>
											.mp3
										</MenuItem>
                                        <MenuItem value={"Output4"}>
											.mp4
										</MenuItem>
                                        <MenuItem value={"Output5"}>
											.m4a
										</MenuItem>
                                        <MenuItem value={"Output6"}>
											.flac
										</MenuItem>
                                        <MenuItem value={"Output7"}>
											.ogg
										</MenuItem>
										<MenuItem value={"Output8"}>
											.amr
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
					<Grid container spacing={12}>
							<Grid item xs>
								<FormControl
									variant="outlined"
									className={classes.formControl}
									fullWidth
								>
									<InputLabel id="demo-simple-select-outlined-label">
										Channels
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											value={promp.channels}
											onChange={(e) =>
												promp.setChannel(e.target.value)
											}
											label="Scale"
											required
										>
											<MenuItem value={"1"}>1</MenuItem>
											<MenuItem value={"2"}>2</MenuItem>
										</Select>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
						<Grid container spacing={12}>
							<Grid item xs>
								<FormControl component="fieldset">
									<FormControlLabel
										control={
											<Checkbox
												checked={promp.fadein}
												onChange={(e) => {
													promp.setFadeIn(
														e.target.checked
													);
												}}
												name="FadeIn"
												color="primary"
											/>
										}
										label="Fade In"
									/>
									<FormControlLabel
										control={
											<Checkbox
												checked={promp.fadeOut}
												onChange={(e) => {
													promp.setFadeOut(
														e.target.checked
													);
												}}
												name="FadeOut"
												color="primary"
											/>
										}
										label="Fade Out"
									/>
								</FormControl>
							</Grid>
						</Grid>
						<Grid container spacing={12}>
							<Grid item xs>
								<FormControl component="fieldset">
									<FormControlLabel
										control={
											<Checkbox
												checked={promp.invertAudio}
												onChange={(e) => {
													promp.setInvertAudio(
														e.target.checked
													);
												}}
												name="InvertAudio"
												color="primary"
											/>
										}
										label="Invert"
									/>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default AudioForm;
