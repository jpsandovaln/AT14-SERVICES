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
	offset: theme.mixins.toolbar,
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
	title: {
		flexGrow: 1
	}
}));

const options = [
	"Language",
	"Mode"
];

const optionsMode = [
	"dark",
	"clear"
]

const account  = [
	"Profile",
	"Logout",
]

const NavBar = (onClick) => {
	const classes = useStyle();
	const [auth, setAuth] = React.useState(true);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	  };
  
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
					<Typography variant="h6" className={classes.title} noWrap>
						SNIFFER DOG
					</Typography> 
					{auth && (
						<div>
							<IconButton 
								aria-label="display more actions" 
								aria-controls="long-menu"
								aria-haspopup="true"
								edge="end" 
								color="inherit" 
								onClick={handleClick}
							>
								<AccountCircle />
								</IconButton>
							<Menu
								id="long-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Profile</MenuItem>
                				<MenuItem onClick={handleClose}>My account</MenuItem>
							</Menu>
						</div>
					)}
					{auth && (
						<div>
							<IconButton 
							aria-label="display more actions" 
							aria-controls="long-menu"
       						aria-haspopup="false"
							edge="end" 
							color="inherit" 
							onClick={handleClick}
							>
            					<MoreIcon />
          					</IconButton>
							<Menu
								id="long-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>Mode</MenuItem>
                				<MenuItem onClick={handleClose}>Language</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>

		</div>
	);
};

export default NavBar;
