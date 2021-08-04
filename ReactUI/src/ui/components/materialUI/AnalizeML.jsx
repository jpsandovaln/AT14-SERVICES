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
import MachineLearning from "../../../components/FileUpload";
import { useRef } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
		  margin: theme.spacing(1),
		  width: '100%',
		},
		flexGrow: 1,
	},	
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	input: {
		display: "",
	},
}));


export default function Tables() {
	//const data = Array();
	/*<Box component="span" m={6}>
					<ChoicePercentage onChange={handleChange} />
					{console.log(percentage)}
				</Box>*/

	const urlML = "http://localhost:8080/analizeZip";

	const [data, setResponse] = React.useState([]);
	const [uploadFile, setUploadFile] = React.useState(null);
	const [searchWord, setSearchWord] = React.useState("");
	const [algorithm, setAlgorithm] = React.useState("");
	const [percentage, setPercentage] = React.useState("");
	const [age, setAge] = React.useState("");

	const submitForm = (event) => {
		event.preventDefault();
		const algorithm1 = "MobilNet";
		const dataArray = new FormData();
		dataArray.append("searchWord", searchWord);
		dataArray.append("algorithm", algorithm1);
		dataArray.append("percentage", percentage);
		dataArray.append("zipFile", uploadFile);

		const fetchData = () => {
			axios
				.post(urlML, dataArray, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					setResponse(res.data);
					console.log(res.data);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchData();
	};

	const uploadInputRef = useRef(null);
	const classes = useStyles();

	const handleChangeX = (event) => {
		setAge(event.target.value);
	};

	const handleChange = (event) => {
		setPercentage(event.target.value);
	};

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={""}>
				Home
				</Link>
				<Typography color="textPrimary">Machine Learning</Typography>
	  		</Breadcrumbs>
			<form onSubmit={submitForm}>
			<Card className={classes.root}>
				<CardHeader title="Machine Learning Analizer">
				</CardHeader>
				<CardContent>
					<Grid container spacing={1}>
                  		<Grid item xs={4} spacing={1}>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Search word"
								variant="outlined"
								placeholder={"SearchWord"}
								onChange={(e) => setSearchWord(e.target.value)}
							/>
						</Grid>
						<Grid item xs={4} spacing={1}>
							<TextField
								fullWidth
								variant="outlined"
								id="outlined-basic"
								type="text"
								placeholder={"Percentage"}
								onChange={(e) => setPercentage(e.target.value)}
							/>
						</Grid>
						<Grid item xs={4} spacing={1}>
							<ChoiceAlgorithm />
						</Grid>
						<Grid item xs={12}>
								<div className={classes.root}>
									<input
										accept="zip/*"
										className={classes.input}
										id="contained-button-file"
										type="file"
										onChange={(e) =>
											setUploadFile(e.target.files[0])
										}
									/>
									<label htmlFor="contained-button-file">
										<Button
											variant="contained"
											color="primary"
											component="span"
										>
											Upload
										</Button>
									</label>
								</div>
						</Grid>
					</Grid>	
					
				</CardContent>
            	<CardActions>
              		<Button type="submit" variant="contained" color="primary">Analyze</Button>
            	</CardActions>
          	</Card>
			</form>
			<Card className={classes.root}>
				<CardHeader title="Results">
				</CardHeader>
				<CardContent>
					<TableContainer component={Paper}>
						<Table
							className={classes.table}
							size="small"
							aria-label="a dense table"
						>
							<TableHead>
								<TableRow>
									<TableCell>Algorithm</TableCell>
									<TableCell align="right">Word</TableCell>
									<TableCell align="right">
										Percentage
									</TableCell>
									<TableCell align="right">Second</TableCell>
									<TableCell align="right">Image</TableCell>
									<TableCell align="right">Options</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data &&
									data.map((row) => (
										<TableRow key={row.name}>
											<TableCell align="right">
												{row.Algorithm}
											</TableCell>
											<TableCell align="right">
												{row.Word}
											</TableCell>
											<TableCell align="right">
												{row.Percentage}
											</TableCell>
											<TableCell align="right">
												{row.Second}
											</TableCell>
											<TableCell align="right">
												<img
													src={row.PathImage}
													width="60"
													height="60"
													alt="prueba"
												/>
											</TableCell>
											<TableCell align="right">
											<a href={row.PathImage} download>imagen</a>
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
			</CardContent>
          	</Card>		
		</div>
	);
}
