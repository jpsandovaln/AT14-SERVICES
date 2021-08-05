import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 5,
	},
	paper: {
		padding: theme.spacing(10),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function ChoicePercentage(setPercentage, percentage) {
	const classes = useStyles();
	//const [percentage, setPercentage] = React.useState('');

	//const handleChange = (event) => {
	//    setPercentage(event.target.value);
	//};

	return (
		<FormControl
			variant="outlined"
			className={classes.formControl}
			fullWidth
		>
			<InputLabel id="demo-simple-select-outlined-label">
				Percentage
			</InputLabel>
			<Select
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				value=""
				//onChange={handleChange}
				{...setPercentage}
				label="Percentage"
			>
				{console.log(percentage.valueOf())}
				<MenuItem value={percentage}>
					<em>-</em>
				</MenuItem>
				<MenuItem value={5}>5%</MenuItem>
				<MenuItem value={10}>10%</MenuItem>
				<MenuItem value={15}>15%</MenuItem>
				<MenuItem value={20}>20%</MenuItem>
				<MenuItem value={25}>25%</MenuItem>
				<MenuItem value={30}>30%</MenuItem>
				<MenuItem value={35}>35%</MenuItem>
				<MenuItem value={40}>40%</MenuItem>
				<MenuItem value={45}>45%</MenuItem>
				<MenuItem value={50}>50%</MenuItem>
				<MenuItem value={55}>55%</MenuItem>
				<MenuItem value={60}>60%</MenuItem>
				<MenuItem value={65}>65%</MenuItem>
				<MenuItem value={70}>70%</MenuItem>
				<MenuItem value={75}>75%</MenuItem>
				<MenuItem value={80}>80%</MenuItem>
				<MenuItem value={85}>85%</MenuItem>
				<MenuItem value={90}>90%</MenuItem>
				<MenuItem value={95}>95%</MenuItem>
				<MenuItem value={100}>100%</MenuItem>
			</Select>
		</FormControl>
	);
}
