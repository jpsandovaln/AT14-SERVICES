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

export default function ChoicePercentage() {
	const classes = useStyles();
	const [algorithm, setAlgorithm] = React.useState("");

	const handleChange = (event) => {
		setAlgorithm(event.target.value);
	};

	return (
		<FormControl
			variant="outlined"
			className={classes.formControl}
			fullWidth
		>
			<InputLabel id="demo-simple-select-outlined-label">
				Algorithm
			</InputLabel>
			<Select
				labelId="demo-simple-select-outlined-label"
				id="demo-simple-select-outlined"
				value={algorithm}
				onChange={handleChange}
				label="Algorithm"
			>
				<MenuItem value="">
					<em>-</em>
				</MenuItem>
				<MenuItem value={"CocoSSD"}>CocoSSD</MenuItem>
				<MenuItem value={"MovilNet"}>MovilNet</MenuItem>
			</Select>
		</FormControl>
	);
}
