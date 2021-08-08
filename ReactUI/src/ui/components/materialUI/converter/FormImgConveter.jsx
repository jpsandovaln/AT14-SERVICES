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
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
	paper: {},
	input: {
		display: "none",
	},
	root: {
		width: 300,
	},
}));

const TabPanel = (props) => {
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
};

const a11yProps = (index) => {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
};
const valuetext = (value) => {
	return `${value}°C`;
};

const FormImgConverter = (
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

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

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
						<CardHeader subheader="Image Format" />
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
												Small steps
											</Typography>
											<Slider
												defaultValue={0.00000005}
												getAriaValueText={valuetext}
												aria-labelledby="discrete-slider-small-steps"
												step={0.00000001}
												marks
												min={-0.00000005}
												max={0.0000001}
												valueLabelDisplay="auto"
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
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={5}>
					<Card className={classes.paper}>
						<CardHeader subheader="Effects" />
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
												Small steps
											</Typography>
											<Slider
												defaultValue={0.00000005}
												getAriaValueText={valuetext}
												aria-labelledby="discrete-slider-small-steps"
												step={0.00000001}
												marks
												min={-0.00000005}
												max={0.0000001}
												valueLabelDisplay="auto"
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
												Small steps
											</Typography>
											<Slider
												defaultValue={0.00000005}
												getAriaValueText={valuetext}
												aria-labelledby="discrete-slider-small-steps"
												step={0.00000001}
												marks
												min={-0.00000005}
												max={0.0000001}
												valueLabelDisplay="auto"
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
						<CardHeader subheader="Filters" />
						<CardContent>
							<Grid container spacing={6}>
								<Grid item xs>
									<FormControl component="fieldset">
										<RadioGroup
											aria-label="gender"
											name="gender1"
											value={value}
											onChange={handleChange}
										>
											<FormControlLabel
												value="monochrome"
												control={<Radio />}
												label="Monochrome"
											/>
											<FormControlLabel
												value="grayScale"
												control={<Radio />}
												label="Gray Scale"
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

export default FormImgConverter;
