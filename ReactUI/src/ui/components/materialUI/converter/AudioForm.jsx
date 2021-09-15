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
					<Grid item md={2}>
							<input
								accept="audio/*"
								className={classes.input}
								id="contained-button-audio"
								name="contained-button-audio"
								multiple
								type="file"
								required
								onChange={promp.setFileAudio}
							/>
							<label htmlFor="contained-button-audio">
								<Button
									variant="contained"
									color="#83bbeb"
									component="span"
								>
									Upload
								</Button>
							</label>
						</Grid>
						<Grid item md={4}>
							<TextField
								fullWidth
								id="outlined-basic"
								variant="outlined"
								value={promp.nameAudio}
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
										<MenuItem value={".wav"}>
											.wav
										</MenuItem>
										<MenuItem value={".mp2"}>
											.mp2
										</MenuItem>
										<MenuItem value={".mp3"}>
											.mp3
										</MenuItem>
                                        <MenuItem value={".mp4"}>
											.mp4
										</MenuItem>
                                        <MenuItem value={".m4a"}>
											.m4a
										</MenuItem>
                                        <MenuItem value={".flac"}>
											.flac
										</MenuItem>
                                        <MenuItem value={".ogg"}>
											.ogg
										</MenuItem>
										<MenuItem value={".amr"}>
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
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default AudioForm;
