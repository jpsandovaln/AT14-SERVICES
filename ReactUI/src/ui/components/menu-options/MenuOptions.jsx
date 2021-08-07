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
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

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

const MenuOptions = (props) => {
	const classes = useStyles();

	const testContent = [
		{
			title: "Home",
			icon: <HomeIcon style={{ color: "#fff" }} />,
			path: "/",
		},
		{
			title: "Converter",
			icon: <AutorenewIcon style={{ color: "#fff" }} />,
			path: "/Converter",
		},
		{
			title: "Machine Learning",
			icon: <DashboardIcon style={{ color: "#fff" }} />,
			path: "/MachineAnalize",
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
