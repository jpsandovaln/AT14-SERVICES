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
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
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

const ImgForm = (promp) => {
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
								color="primary"
								component="span"
							>
								Upload
							</Button>
						</label>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card className={classes.card}>
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
											value={promp.imageSize}
											onChange={(e, newValue) => {
												promp.setImageSize(newValue);
											}}
											defaultValue={30}
											track={promp.imageSize}
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
										value={promp.audioFormat}
										onChange={(e) =>
											promp.setAudioFormat(e.target.value)
										}
										required
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
			<Grid item xs={4}>
				<Card className={classes.card}>
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
											value={promp.dubling}
											onChange={(e, newValue) => {
												promp.setDubling(newValue);
											}}
											defaultValue={30}
											track={promp.dubling}
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
											value={promp.paintEffect}
											onChange={(e, newValue) => {
												promp.setPaintEffect(newValue);
											}}
											defaultValue={30}
											track={promp.paintEffect}
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
			<Grid item xs={4}>
				<Card className={classes.card}>
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
												checked={promp.monochrome}
												onChange={(e) => {
													promp.setMonochrome(
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
												checked={promp.greyScale}
												onChange={(e) => {
													promp.setGreyScale(
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
		</Grid>
	);
};

export default ImgForm;
