import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import TableML from "../../components/materialUI/machine-learning/TableML";
import FormML from "../../components/materialUI/machine-learning/FormML";

export const UploadMutation = gql`
  mutation uiToVideoConverter($searchWord: String, $algorithm: String, $percentage: String, $file: Upload!) {
    uiToVideoConverter(searchWord: $searchWord, algorithm: $algorithm, percentage: $percentage, file: $file) {
      Algorithm
	  Word
      Percentage
	  Second
	  PathImage
    }
  }
`;

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
}));


const MachineLearing = () => {

	const [data, setResponse] = useState([]);
	const [searchWord, setSearchWord] = useState("");
	const [algorithm, setAlgorithm] = useState("");
	const [percentage, setPercentage] = useState("");
	const [FileData, setUploadFile] = useState(null);
	const [open, setOpen] = useState(false);
	const [nameVideo, setNameVideo] = React.useState("Select a video file");

	const [uiToVideoConverter, { error }] = useMutation(UploadMutation);

	const setFileVideo = async (e) => {
		let videoFile = document.getElementById("contained-button-video");
		if (videoFile.files.length > 0) {

			setNameVideo(videoFile.files.item(0).name);
			setUploadFile(e.target.files[0]);
		} else {
			setNameVideo("Select a video file");
			setUploadFile(null);
		}
	};

	const submitForm = async (event) => {
		event.preventDefault();
		setOpen(true);
		setResponse(null);
		const data = await uiToVideoConverter({
			variables: {
			  searchWord: searchWord+"",
			  algorithm: algorithm+"",
			  percentage: percentage+"",
			  file: FileData  
			}
		  });
		  if (error) {
			console.log(error);
		  }
		  else{
			console.log(data.data.uiToVideoConverter);  
			setResponse(data.data.uiToVideoConverter);
			setOpen(false);		  
		  }
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
			<form onSubmit={submitForm}>
				<FormML
					classes={classes}
					setSearchWord={setSearchWord}
					percentage={percentage}
					setPercentage={setPercentage}
					algorithm={algorithm}
					setAlgorithm={setAlgorithm}
					setUploadFile={setUploadFile}
					nameVideo={nameVideo}
					setNameVideo={setNameVideo}
					setFileVideo={setFileVideo}
				/>
			</form>
			<br />
			<Card>
				<CardHeader title="Results"></CardHeader>
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
