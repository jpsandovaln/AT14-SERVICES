import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UploadImages from "../../components/images-upload";
import CenteredTabs from "../../components/tab-panel/TabPanel";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { CardHeader } from "@material-ui/core";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
	paper: {},
	input: {
		display: "none",
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

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

function Converter(props) {
	const classes = useStyles();
	const content = props;
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
		<div className={classes.root}>
			<Container>
				<Card className={classes.root}>
					<CardContent>
						<div className={classes.root}>
							<AppBar position="static" color="default">
								<Tabs
									value={value}
									onChange={handleChange}
									indicatorColor="primary"
									textColor="primary"
									variant="fullWidth"
									aria-label="full width tabs example"
								>
									<Tab
										label="Video converter"
										{...a11yProps(0)}
									/>
									<Tab
										label="Imagen converter"
										{...a11yProps(1)}
									/>
								</Tabs>
							</AppBar>
							<SwipeableViews
								axis={
									theme.direction === "rtl"
										? "x-reverse"
										: "x"
								}
								index={value}
								onChangeIndex={handleChangeIndex}
							>
								<TabPanel
									value={value}
									index={0}
									dir={theme.direction}
								>
									<Grid container spacing={3}>
										<Grid item xs={12}>
											<Card className={classes.paper}>
												<CardContent>
													<input
														accept="image/*"
														className={
															classes.input
														}
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
																className={
																	classes.formControl
																}
																fullWidth
															>
																<InputLabel id="demo-simple-select-outlined-label">
																	Output
																	Format
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val1"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val2"
																		}
																	>
																		Val2
																	</MenuItem>
																</Select>
															</FormControl>
														</Grid>
														<Grid item xs>
															<FormControl
																variant="outlined"
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"CocoSSD"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"MovilNet"
																		}
																	>
																		Val2
																	</MenuItem>
																</Select>
															</FormControl>
														</Grid>
														<Grid item xs>
															<FormControl
																variant="outlined"
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"CocoSSD"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"MovilNet"
																		}
																	>
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
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val1"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val2"
																		}
																	>
																		Val2
																	</MenuItem>
																</Select>
															</FormControl>
														</Grid>
														<Grid item xs>
															<FormControl
																variant="outlined"
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"CocoSSD"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"MovilNet"
																		}
																	>
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
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"CocoSSD"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"MovilNet"
																		}
																	>
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
																	value={
																		flipHorizon
																	}
																	onChange={
																		handleChangeRadio
																	}
																>
																	<FormControlLabel
																		value="Flip horizon"
																		control={
																			<Radio />
																		}
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
																	value={
																		flipVertical
																	}
																	onChange={
																		handleChangeRadio1
																	}
																>
																	<FormControlLabel
																		value="Flip vertical"
																		control={
																			<Radio />
																		}
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
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val1"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val2"
																		}
																	>
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
																	value={
																		value
																	}
																	onChange={
																		handleChangeRadio1
																	}
																>
																	<FormControlLabel
																		value="obtainFrames"
																		control={
																			<Radio />
																		}
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
																className={
																	classes.formControl
																}
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
																		<em>
																			-
																		</em>
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val1"
																		}
																	>
																		Val1
																	</MenuItem>
																	<MenuItem
																		value={
																			"Val2"
																		}
																	>
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
																	value={
																		value
																	}
																	onChange={
																		handleChangeRadio1
																	}
																>
																	<FormControlLabel
																		value="obtainAudio"
																		control={
																			<Radio />
																		}
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
															<TableContainer
																component={
																	Paper
																}
															>
																<Table
																	className={
																		classes.table
																	}
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
																		<TableRow

																		>
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
								</TabPanel>
								<TabPanel
									value={value}
									index={1}
									dir={theme.direction}
								>
									Item Two
								</TabPanel>
							</SwipeableViews>
						</div>
					</CardContent>
				</Card>
			</Container>
		</div>
	);
}

export default Converter;
