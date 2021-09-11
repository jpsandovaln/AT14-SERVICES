import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import FormImgExt from "../../components/materialUI/extractor-service/FormImgExt";
import FormMetadata from "../../components/materialUI/extractor-service/FormMetadata"
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
	paper: {},
	input: {
		display: "none",
	},
	title: {
		color: "white",
		fontSize: 14,
		backgroundColor: "#3a4651",
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
};

const ExtractService = () => {
	const [t, i18n] = useTranslation("global");
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className={classes.root}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={""}>
					{t("extractor-service.home")}
				</Link>
				<Typography color="textPrimary">{t("extractor-service.title")}</Typography>
			</Breadcrumbs>

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
									className={classes.title}
									label={t("extractor-service.metadata.metadata")}
									{...a11yProps(0)}
								/>
								<Tab
									className={classes.title}
									label={t("extractor-service.image-text.label")}
									{...a11yProps(1)}
								/>
							</Tabs>
						</AppBar>
						<SwipeableViews
							axis={theme.direction === "rtl" ? "x-reverse" : "x"}
							index={value}
							onChangeIndex={handleChangeIndex}
						>
							<TabPanel
								value={value}
								index={0}
								dir={theme.direction}
							>
								<FormMetadata/>
							</TabPanel>
							<TabPanel
								value={value}
								index={1}
								dir={theme.direction}
							>
								<FormImgExt/>
							</TabPanel>
						</SwipeableViews>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default ExtractService;
