import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	IconButton,
	MenuItem,
	FormGroup,
	Switch,
	Menu,
	MenuList,
	Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
	offset: theme.mixins.toolbar,
	appBar: {
		backgroundColor: "#6c79eb",
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
	title: {
		flexGrow: 1,
	},
}));
//TODO review if onClick is working
const NavBar = (props) => {
	const classes = useStyle();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	});

	const handleOpenMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const AntSwitch = withStyles((theme) => ({
		root: {
			width: 28,
			height: 16,
			padding: 0,
			display: "flex",
		},
		switchBase: {
			padding: 2,
			color: theme.palette.grey[500],
			"&$checked": {
				transform: "translateX(12px)",
				color: theme.palette.common.white,
				"& + $track": {
					opacity: 1,
					backgroundColor: theme.palette.primary.main,
					borderColor: theme.palette.primary.main,
				},
			},
		},
		thumb: {
			width: 12,
			height: 12,
			boxShadow: "none",
		},
		track: {
			border: `1px solid ${theme.palette.grey[500]}`,
			borderRadius: 16 / 2,
			opacity: 1,
			backgroundColor: theme.palette.common.white,
		},
		checked: {},
	}))(Switch);

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						//{...onClick}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>

					<Typography variant="h3" className={classes.title} noWrap>
						SNIFFER DOG
					</Typography>
					<div>
						<Avatar
							className={classes.AccountCircle}
							edge="end"
							color="inherit"
							src={props.imageURL}
						>
							<AccountCircle />
						</Avatar>
					</div>
					<div>
						<IconButton
							onClick={handleOpenMenu}
							aria-controls="menu"
							disableRippl
							className={classes.MoreIcon}
							edge="end"
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
						<Menu
							id="menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
						>
							<MenuItem onClick={handleMenuClose}>
								Profile
							</MenuItem>
							<MenuItem onClick={handleMenuClose}>
								Language
							</MenuItem>
							<MenuItem onClick={handleMenuClose}>
								Mode
								<FormGroup>
									<Typography component="div">
										<Grid
											component="label"
											container
											alignItems="center"
											spacing={1}
										>
											<Grid item>
												<WbSunnyIcon />
											</Grid>
											<Grid item>
												<AntSwitch
													checked={state.checkedC}
													onChange={handleChange}
													name="checkedC"
												/>
											</Grid>
											<Grid item>
												<Brightness2Icon />
											</Grid>
										</Grid>
									</Typography>
								</FormGroup>
							</MenuItem>
							<MenuItem onClick={handleMenuClose}>
								About us
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
