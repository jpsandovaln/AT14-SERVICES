import React from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { useTranslation } from "react-i18next";
import "./MenuOption.css";

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	colors: {
		backgroundColor: "#3a4651",
		color: "#fff",
	},
	positionText: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	menuText: {
		margin: theme.spacing(0),
	},
	box: {
		position: "fixed",
	},
}));

const MenuOptions = () => {
	const classes = useStyles();
	const [t, i18n] = useTranslation("global");

	const testContent = [
		{
			title: t("sidebar.home"),
			icon: <HomeIcon style={{ color: "#fff" }} />,
			path: "/home",
		},
		{
			title: t("sidebar.converter"),
			icon: <AutorenewIcon style={{ color: "#fff" }} />,
			path: "/Converter",
		},
		{
			title: t("sidebar.machine-learning"),
			icon: <DashboardIcon style={{ color: "#fff" }} />,
			path: "/MachineAnalize",
		},
		{
			title: t("sidebar.extractor-service"),
			icon: <AppsIcon style={{ color: "#fff" }} />,
			path: "/ExtractorService",
		},
		{
			title: t("sidebar.report-convert"),
			icon: <AssessmentIcon style={{ color: "#fff" }} />,
			path: "/graphql",
		},
	];

	return (
		<div className={classes.colors}>
			<div className={`${classes.toolbar} ${classes.positionText}`}>
				<h3 className={classes.menuText}>Menu</h3>
			</div>
			<Divider />
			<List>
				{testContent.map((item) => (
					<ListItem
						className="options"
						button
						key={item.title}
						component={Link}
						to={item.path}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default MenuOptions;
