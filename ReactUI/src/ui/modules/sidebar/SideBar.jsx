import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuOptions from "../../components/menu-options/MenuOptions";
import NavBar from "../../components/navbar/NavBar";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		backgroundColor: "#2b9bfbf",
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		backgroundColor: "#3a4651",
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const SideBar = (props) => {
	const { window } = props;
	const page = props.page;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const direction = theme.direction === "rtl" ? "right" : "left";

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const parametersUp = {
		container: container,
		variant: "temporary",
		anchor: direction,
		open: mobileOpen,
		onClose: handleDrawerToggle,
		classes: {
			paper: classes.drawerPaper,
		},
		ModalProps: {
			keepMounted: true,
		},
	};

	const parametersDown = {
		classes: {
			paper: classes.drawerPaper,
		},
		variant: "permanent",
		open: mobileOpen,
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar onClick={handleDrawerToggle} imageURL={props.imageURL} />

			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden smUp implementation="css">
					<Drawer {...parametersUp}>
						<MenuOptions />
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer {...parametersDown}>
						<MenuOptions />
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{page()}
			</main>
		</div>
	);
};

SideBar.propTypes = {
	window: PropTypes.func,
};

export default SideBar;
