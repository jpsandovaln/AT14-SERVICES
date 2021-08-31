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
	Menu
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

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
		flexGrow: 1
	}
}));

const NavBar = (onClick) => {
	const classes = useStyle();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [state, setState] = React.useState({
		checkedA: true,
		checkedB: true,
	  });

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	  };
  
	const handleClose = () => {
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
		  display: 'flex',
		},
		switchBase: {
		  padding: 2,
		  color: theme.palette.grey[500],
		  '&$checked': {
			transform: 'translateX(12px)',
			color: theme.palette.common.white,
			'& + $track': {
			  opacity: 1,
			  backgroundColor: theme.palette.primary.main,
			  borderColor: theme.palette.primary.main,
			},
		  },
		},
		thumb: {
		  width: 12,
		  height: 12,
		  boxShadow: 'none',
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
						{...onClick}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
				
					<Typography variant="h3" className={classes.title} noWrap>
						SNIFFER DOG
						
					</Typography> 
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
							<IconButton
							>
							<FormGroup>
									<Typography component="div">
										<Grid component="label" 
										container alignItems="center" spacing={1}
										>
										<Grid item><WbSunnyIcon/></Grid>
										<Grid item>
											<AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC"  />
										</Grid>
										<Grid item><Brightness2Icon/></Grid>
										</Grid>
									</Typography>
									</FormGroup>
							</IconButton>
                				<MenuItem onClick={handleClose}>Language</MenuItem>
							</Menu>
						</div>
				</Toolbar>
			</AppBar>

		</div>
	);
};

export default NavBar;
