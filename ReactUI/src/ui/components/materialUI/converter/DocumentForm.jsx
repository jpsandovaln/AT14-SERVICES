import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
					<div>
						<Grid container spacing={6}>
							<Grid item xs={6} md={6} sm={12} >
								<input
									accept="document/*"
									className={classes.input}
									id="contained-button-file"
									name="contained-button-file"						
									type="file"
									onChange={(e) => 
										promp.setUploadFile(e.target.files[0])
									}
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
							</Grid>
							<Grid item xs={6} md={6} sm={12} >
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
							<Grid item xs={6} md={6} sm={12} >
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
											value={promp.outputSize}
											onChange={(e, newValue) => {
												promp.setOutputSize(newValue);
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
							<Grid item xs={6} md={6} sm={12} >
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
										value={promp.outputDegrees}
										onChange={(e) =>
											promp.setOutputDegrees(
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
							<Grid item xs={6} md={6} sm={12} >
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
							<Grid item xs={6} md={6} sm={12} >
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
							<Grid item xs={6} md={6} sm={12} >
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
							<Grid item xs={6} md={6} sm={12} >
								<FormControl
										variant="outlined"
										className={classes.formControl}
										fullWidth
									>
									<InputLabel id="demo-simple-select-outlined-label">
											Type
										</InputLabel>
									<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									label="Type"
									value={promp.type}
									onChange={(e) =>
										promp.setType(
											e.target.value
										)
									}
									required
										>
											<MenuItem value={"monochrome"}>
												Monochrome
											</MenuItem>
											<MenuItem value={"greyScale"}>
												Grey Scale
											</MenuItem>
										</Select>
								</FormControl>
							</Grid>																																	
						</Grid>
					</div>
	);
};

export default DocumentForm;
