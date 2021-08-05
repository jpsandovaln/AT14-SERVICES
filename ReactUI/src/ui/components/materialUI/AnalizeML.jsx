import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import ChoicePercentage from "./ChoicePercentage";
import ChoiceAlgorithm from "./ChoiceAlgorithm";
import BtnUploadFile from "./BtnUploadFile";
import DataTable from "./Table";
import BtnAnalyze from "./BtnAnalyze";

/*const FileUpload = () =>{

    const urlML = "http://localhost:8080/analizeImage";   */
/*
    const [uploadFile, setUploadFile] = React.useState(null);
    const [searchWord, setSearchWord] = React.useState("");
    const [algorithm, setAlgorithm] = React.useState("");
    const [percentage, setPercentage] = React.useState("");

    const submitForm = (event) => {
      event.preventDefault();

      const dataArray = new FormData();
      dataArray.append("searchWord", searchWord);
      dataArray.append("algorithm", algorithm);
      dataArray.append("percentage", percentage);
      dataArray.append("zipFile", uploadFile);
  /*
      axios
        .post(urlML, dataArray, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });*/
//};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

export default function Table() {
	//const [uploadFile, setUploadFile] = React.useState(null);
	//const [searchWord, setSearchWord] = React.useState("");
	//const [algorithm, setAlgorithm] = React.useState("");
	const [percentage, setPercentage] = React.useState("");
	const handleChange = (event) => {
		setPercentage(event.target.value);
	};

	const classes = useStyles();
	return (
		<Grid container spacing={1}>
			<Grid item xs={8}>
				<Paper className={classes.paper}>
					<Typography variant="h6" component="h2">
						Machine Learning Analyzer
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={7}>
				<Box component="span" m={6}>
					<TextField
						fullWidth
						id="outlined-basic"
						label="Search word"
						variant="outlined" /*onChange={(e) => setSearchWord(e.target.value)}*/
					/>
				</Box>
			</Grid>
			<Grid item xs={7}>
				<Box component="span" m={6}>
					<ChoicePercentage
						onChange={handleChange}
						percentage={percentage}
					/>
					{console.log(percentage)}
				</Box>
			</Grid>
			<Grid item xs={7}>
				<Box component="span" m={6}>
					<ChoiceAlgorithm />
				</Box>
			</Grid>
			<Grid item xs={7}>
				<Box component="span" m={6}>
					<BtnUploadFile />
					<BtnAnalyze />
				</Box>
			</Grid>
			<Grid item xs={7}>
				<DataTable />
			</Grid>
		</Grid>
	);
}
