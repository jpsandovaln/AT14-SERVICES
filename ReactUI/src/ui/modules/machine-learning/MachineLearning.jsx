import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import TableML from "../../components/materialUI/machine-learning/TableML";
import FormML from "../../components/materialUI/machine-learning/FormML";

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
let fileRecived = "";
const MachineLearing = () => {
	//const urlVC = "http://localhost:8083/frames";
	const urlML = "http://localhost:8080/analizeZip";

	const [data, setResponse] = React.useState([]);
	const [uploadFile, setUploadFile] = React.useState(null);
	const [searchWord, setSearchWord] = React.useState("");
	const [algorithm, setAlgorithm] = React.useState("");
	const [percentage, setPercentage] = React.useState("");
	const [nameVideo, setNameVideo] = React.useState("Select a video file");
	const [open, setOpen] = React.useState(false);

	/*const obtainFrames = true;
	const frameScale = 400;
	const grayScale = true;*/

	const nameFromVideo = async (e) => {
		let videoFile = document.getElementById("contained-button-videoFile");

		if (videoFile.files.length > 0) {
			setNameVideo(videoFile.files.item(0).name);
			setUploadFile(e.target.files[0]);
		} else {
			setNameVideo("Select a video file");
			setUploadFile(null);
		}
	};

	const submitForm = (event) => {
		event.preventDefault();
		setOpen(true);

		/*const dataArrayConvert = new FormData();
		dataArrayConvert.append("obtainFrames", obtainFrames);
		dataArrayConvert.append("frameScale", frameScale);
		dataArrayConvert.append("grayScale", grayScale);
		dataArrayConvert.append("file", uploadFile);

		const fetchDataConvert = () => {
			setResponse([]);
			axios
				.post(urlVC, dataArrayConvert, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					//setResponse(res.data);
					fileRecived = res.data;
					setOpen(false);
				})
				.catch((error) => {
					console.log(error);
				});
		};
		fetchDataConvert();*/

		const dataArray = new FormData();
		dataArray.append("searchWord", searchWord);
		dataArray.append("algorithm", algorithm);
		dataArray.append("percentage", percentage);
		dataArray.append("zipFile", uploadFile);
		//dataArray.append("zipFile", fileRecived);

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
				<Typography color="textPrimary">Machine Learning</Typography>
			</Breadcrumbs>
			<form name="videoForm" onSubmit={submitForm}>
				<FormML
					classes={classes}
					setSearchWord={setSearchWord}
					percentage={percentage}
					setPercentage={setPercentage}
					algorithm={algorithm}
					setAlgorithm={setAlgorithm}
					setUploadFile={setUploadFile}
					nameFromVideo={nameFromVideo}
					setNameVideo={setNameVideo}
					nameVideo={nameVideo}
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
					<TableML
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

export default MachineLearing;
