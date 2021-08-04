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

const useStyles = makeStyles((theme) => ({
	root: {
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
		<form onSubmit={submitForm}>
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
							variant="outlined"
							placeholder={"SearchWord"}
							onChange={(e) => setSearchWord(e.target.value)}
						/>
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box component="span" m={6}>
						<TextField
							fullWidth
							variant="outlined"
							id="outlined-basic"
							type="text"
							placeholder={"Percentage"}
							onChange={(e) => setPercentage(e.target.value)}
						/>
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box component="span" m={6}>
						<ChoiceAlgorithm />
					</Box>
				</Grid>
				<Grid item xs={7}>
					<Box component="span" m={6}>
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

						<div>
							<label htmlFor="contained-button-submit">
								<Button
									type="submit"
									variant="outlined"
									color="primary"
								>
									Analyze
								</Button>
							</label>
						</div>
					</Box>
				</Grid>
				<Grid item xs={7}>
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
				</Grid>
			</Grid>
		</form>
	);
}
