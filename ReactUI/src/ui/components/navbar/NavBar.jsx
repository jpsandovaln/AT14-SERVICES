import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#01579b",
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			marginLeft: drawerWidth,
			zIndex: 1201,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
}));

const NavBar = (onClick) => {
	const classes = useStyle();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					{...onClick}
					className={classes.menuButton}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					SNIFFER DOG
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
