import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	IconButton,
	MenuItem,
	FormControlLabel,
	FormGroup,
	Switch,
	Menu
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#9da2a3",
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
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
  
	const handleChange = (event) => {
	  setAuth(event.target.checked);
	};
  
	const handleMenu = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleClose = () => {
	  setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<FormGroup>
				<FormControlLabel
					control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
					label={auth ? 'Logout' : 'Login'}
				/>
			</FormGroup>
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
					{auth && (
						<div>
							<IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
								<MenuItem onClick={handleClose}>My account</MenuItem>
							</Menu>
						</div>
					)}
					<IconButton aria-label="display more actions" edge="end" color="inherit">
            			<MoreIcon />
          			</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
