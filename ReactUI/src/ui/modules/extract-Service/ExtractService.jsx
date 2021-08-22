import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import TableMetadata from "../../components/materialUI/extractor-service/TableMetadataForm";
import FormMetadata from "../../components/materialUI/extractor-service/FormMetadata"

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "100%",
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
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const ExtractService = () => {
	const urlML = "http://localhost:8080/analizeZip";

	const [data, setResponse] = React.useState([]);
	const [uploadFile, setUploadFile] = React.useState(null);
	const [searchWord, setSearchWord] = React.useState("");
	const [algorithm, setAlgorithm] = React.useState("");
	const [percentage, setPercentage] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitForm = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();
		dataArray.append("searchWord", searchWord);
		dataArray.append("algorithm", algorithm);
		dataArray.append("percentage", percentage);
		dataArray.append("zipFile", uploadFile);

		const fetchData = () => {
			setResponse([]);
			axios
				.post(urlML, dataArray, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					setResponse(res.data);
					setOpen(false);
				})
				.catch((error) => {
					console.log(error);
				});
		};

		fetchData();
	};

	const classes = useStyles();

	return (
		<div>
			<Breadcrumbs aria-label="breadcrumb">
				<Link color="inherit" href="/" onClick={""}>
					Home
				</Link>
				<Typography color="textPrimary">Metadata</Typography>
			</Breadcrumbs>
			<form onSubmit={submitForm}>
				<FormMetadata
					classes={classes}
					setSearchWord={setSearchWord}
					percentage={percentage}
					setPercentage={setPercentage}
					algorithm={algorithm}
					setAlgorithm={setAlgorithm}
					setUploadFile={setUploadFile}
				/>
			</form>
			<br />
			<Card>
				<CardHeader
					title="Results"
					className={classes.title}
					titleTypographyProps={{ variant: "h6" }}
				></CardHeader>
				<CardContent>
					<TableMetadata
						classes={classes}
						open={open}
						setOpen={setOpen}
						data={data}
						setResponse={setResponse}
					/>
				</CardContent>
			</Card>
		</div>
	);
};

export default ExtractService;
