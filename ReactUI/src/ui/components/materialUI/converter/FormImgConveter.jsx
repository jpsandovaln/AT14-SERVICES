import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	paper: {},
	input: {
		display: "none",
	},
	root: {
		width: 300,
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}
function valuetext(value) {
	return `${value}°C`;
}

const FormImgConveter = (
	setSearchWord,
	percentage,
	setPercentage,
	algorithm,
	setAlgorithm,
	setUploadFile
) => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [flipVertical, setflipVertical] = React.useState("flipVertical");
	const [flipHorizon, setFlipHorizon] = React.useState("flipHorizon");

	const handleChangeRadio = (event) => {
		setflipVertical(event.target.flipVertical);
	};
	const handleChangeRadio1 = (event) => {
		setFlipHorizon(event.target.flipHorizon);
	};

	return (
		<div>
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
						<CardHeader subheader="Video Format" />
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Output Format"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"Val1"}>
												Val1
											</MenuItem>
											<MenuItem value={"Val2"}>
												Val2
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Fps"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"CocoSSD"}>
												Val1
											</MenuItem>
											<MenuItem value={"MovilNet"}>
												Val2
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
											Scale
										</InputLabel>
										<Select
											labelId="demo-simple-select-outlined-label"
											id="demo-simple-select-outlined"
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Scale"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"CocoSSD"}>
												Val1
											</MenuItem>
											<MenuItem value={"MovilNet"}>
												Val2
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Audio format"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"Val1"}>
												Val1
											</MenuItem>
											<MenuItem value={"Val2"}>
												Val2
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Quality"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"CocoSSD"}>
												Val1
											</MenuItem>
											<MenuItem value={"MovilNet"}>
												Val2
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
						<CardHeader subheader="Flip and rotate" />
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Scale"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"CocoSSD"}>
												Val1
											</MenuItem>
											<MenuItem value={"MovilNet"}>
												Val2
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
							</Grid>
							<Grid container spacing={6}>
								<Grid item xs>
									<FormControl component="fieldset">
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={flipHorizon}
											onChange={handleChangeRadio}
										>
											<FormControlLabel
												value="Flip horizon"
												control={<Radio />}
												label="Flip horizon"
											/>
										</RadioGroup>
									</FormControl>
								</Grid>

								<Grid item xs>
									<FormControl component="fieldset">
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={flipVertical}
											onChange={handleChangeRadio1}
										>
											<FormControlLabel
												value="Flip vertical"
												control={<Radio />}
												label="Flip vertical"
											/>
										</RadioGroup>
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
						<CardHeader subheader="Video Format" />
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Frames"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"Val1"}>
												Val1
											</MenuItem>
											<MenuItem value={"Val2"}>
												Val2
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs>
									<FormControl component="fieldset">
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={value}
											onChange={handleChangeRadio1}
										>
											<FormControlLabel
												value="obtainFrames"
												control={<Radio />}
												label="Obtain frames"
											/>
										</RadioGroup>
									</FormControl>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
					<br></br>
					<Card className={classes.paper}>
						<CardHeader subheader="Obtain Audio" />
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
											/*value={algorithm}
															onChange={(e) =>
																setAlgorithm(
																	e.target
																		.value
																)
															}*/
											label="Audio format"
										>
											<MenuItem value="">
												<em>-</em>
											</MenuItem>
											<MenuItem value={"Val1"}>
												Val1
											</MenuItem>
											<MenuItem value={"Val2"}>
												Val2
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs>
									<FormControl component="fieldset">
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={value}
											onChange={handleChangeRadio1}
										>
											<FormControlLabel
												value="obtainAudio"
												control={<Radio />}
												label="Obtain Audio"
											/>
										</RadioGroup>
									</FormControl>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={7}>
					<Card className={classes.paper}>
						<CardHeader subheader="Results" />
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
		</div>
	);
};

export default FormImgConveter;
