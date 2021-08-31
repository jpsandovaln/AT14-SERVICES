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
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const UploadMutation = gql`
  mutation uploadFileML($searchWord: String, $algorithm: String, $percentage: String, $file: Upload!) {
    uploadFileML(searchWord: $searchWord, algorithm: $algorithm, percentage: $percentage, file: $file) {
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
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const MachineLearing = () => {

	const [data, setResponse] = useState([]);
	const [searchWord, setSearchWord] = useState("");
	const [algorithm, setAlgorithm] = useState("");
	const [percentage, setPercentage] = useState("");
	const [FileData, setUploadFile] = useState(null);
	const [open, setOpen] = useState(false);

	const [uploadFileML, { error }] = useMutation(UploadMutation);

	const submitForm = async (event) => {
		event.preventDefault();
		setOpen(true);

		const data = await uploadFileML({
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
			console.log(data.data.uploadFileML);  
			setResponse(data.data.uploadFileML);
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
				<CardActions>
					<Button type="submit" variant="contained" color="primary">
						Analyze
					</Button>
				</CardActions>
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
