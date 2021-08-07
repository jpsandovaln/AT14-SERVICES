import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import FormImgConveter from "../../components/materialUI/converter/FormImgConveter";
import FormVideoConverter from "../../components/materialUI/converter/FormVideoConverter";

import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const useStyles = makeStyles((theme) => ({
	paper: {},
	input: {
		display: "none",
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
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
}

const Converter = (props) => {
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
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={""}>
					Home
				</Link>
				<Typography color="textPrimary">Convert</Typography>
			</Breadcrumbs>

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
									<FormVideoConverter />
								</TabPanel>
								<TabPanel
									value={value}
									index={1}
									dir={theme.direction}
								>
									<FormImgConveter />
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
