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
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

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

const DocumentForm = (promp) => {
	const classes = useStyles();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardContent>
						<input
							accept="document/*"
							className={classes.input}
							id="contained-button-file"
							multiple
							type="file"
							required
						/>
						<label htmlFor="contained-button-file">
							<Button
								variant="contained"
								color="#83bbeb"
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
							title="Ppt to Image"
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
											.png
										</MenuItem>
										<MenuItem value={"Output2"}>
											.jpeg
										</MenuItem>
                                        <MenuItem value={"Output3"}>
											.jpg
										</MenuItem>
                                        <MenuItem value={"Output4"}>
											.bmp
										</MenuItem>
                                        <MenuItem value={"Output5"}>
											.raw
										</MenuItem>
                                        <MenuItem value={"Output6"}>
											.tiff
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>
					<CardContent>
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
											Output Size
										</Typography>
										<Slider
											value={promp.size}
											onChange={(e, newValue) => {
												promp.setSize(newValue);
											}}
											defaultValue={0}
											track={promp.quality}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={1}
											marks
											min={0}
											max={10}
										/>
									</div>
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
											Angle of rotation
										</InputLabel>
									<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									label="Rotation Angle"
									value={promp.outputFormat}
									onChange={(e) =>
										promp.setOutputFormat(
											e.target.value
										)
									}
									required
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
						</CardContent>
					<CardContent>
					<Grid container spacing={12}>
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
											Output Quality
										</Typography>
										<Slider
											value={promp.quality}
											onChange={(e, newValue) => {
												promp.setQuality(newValue);
											}}
											defaultValue={0}
											track={promp.quality}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={1}
											marks
											min={0}
											max={10}
										/>
									</div>
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
											defaultValue={0}
											track={promp.dubling}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={10}
											marks
											min={0}
											max={100}
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
											defaultValue={0}
											track={promp.paintEffect}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={10}
											marks
											min={0}
											max={100}
										/>
									</div>
								</FormControl>
							</Grid>
							</Grid>
					</CardContent>
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
				<Grid item xs={12}>
					<Card className={classes.card}>
						<CardHeader
							className={classes.title}
							title="Ppt to Pdf"
							titleTypographyProps={{ variant: "h7" }}
						/>
					<CardContent>
						<Grid container spacing={12}>
							<Grid item xs>
								<FormControl
									variant="outlined"
									className={classes.formControl}
									fullWidth
								>
									<FormControlLabel
										control={
											<Checkbox
												checked={promp.convert}
												onChange={(e) => {
													promp.setConvert(
														e.target.checked
													);
												}}
												name="convert"
												color="primary"
											/>
										}
										label="Convert"
									/>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.title}
						title="Pdf to Image"
						titleTypographyProps={{ variant: "h7" }}
					/>
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
											.png
										</MenuItem>
										<MenuItem value={"Output2"}>
											.jpeg
										</MenuItem>
                                        <MenuItem value={"Output3"}>
											.jpg
										</MenuItem>
                                        <MenuItem value={"Output4"}>
											.bmp
										</MenuItem>
                                        <MenuItem value={"Output5"}>
											.raw
										</MenuItem>
                                        <MenuItem value={"Output6"}>
											.tiff
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					<CardContent>
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
											Output Size
										</Typography>
										<Slider
											value={promp.size}
											onChange={(e, newValue) => {
												promp.setSize(newValue);
											}}
											defaultValue={0}
											track={promp.quality}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={1}
											marks
											min={0}
											max={10}
										/>
									</div>
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
											Angle of rotation
										</InputLabel>
									<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									label="Rotation Angle"
									value={promp.outputFormat}
									onChange={(e) =>
										promp.setOutputFormat(
											e.target.value
										)
									}
									required
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
						</CardContent>
					<CardContent>
					<Grid container spacing={12}>
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
											Output Quality
										</Typography>
										<Slider
											value={promp.quality}
											onChange={(e, newValue) => {
												promp.setQuality(newValue);
											}}
											defaultValue={0}
											track={promp.quality}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={1}
											marks
											min={0}
											max={10}
										/>
									</div>
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
											defaultValue={0}
											track={promp.dubling}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={10}
											marks
											min={0}
											max={100}
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
											defaultValue={0}
											track={promp.paintEffect}
											aria-labelledby="discrete-slider"
											valueLabelDisplay="auto"
											step={10}
											marks
											min={0}
											max={100}
										/>
									</div>
								</FormControl>
							</Grid>
							</Grid>
					</CardContent>
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

export default DocumentForm;
