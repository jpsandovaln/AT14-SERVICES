import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DocumentForm from "./DocumentForm";
import TableDocumentForm from "./TableDocumentForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const UploadMutation = gql`
  mutation uiToPdfImage($outputFormat: String, $outputSize: String, $rotation: String, $quality: String, $paintEffect: String, $type: String, $file: Upload!) {
    uiToPdfImage(outputFormat: $outputFormat, outputSize: $outputSize, rotation: $rotation, quality: $quality, paintEffect: $paintEffect, type: $type, file: $file) {
		name
		filePath
    }
  }
`;

const useStyles = makeStyles(() => ({
	card: {
		height: "100%",
	},
	input: {
		display: "none",
	},
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const FormDocumentConveter = () => {
	const classes = useStyles();

	const [data, setResponse] = React.useState([]);
	
	const [FileData, setUploadFile] = React.useState(null);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [outputDegrees, setOutputDegrees] = React.useState("");
	const [type, setType] = React.useState("");
	const [outputSize, setOutputSize] = React.useState("");
	const [paintEffect, setPaintEffect] = React.useState("");
	const [quality, setQuality] = React.useState("");

	const [uiToPdfImage, { error }] = useMutation(UploadMutation);

	const [open, setOpen] = React.useState(false);

	const submitForm = async (event) => {
		event.preventDefault();
		setOpen(true);
		console.log(outputFormat, outputSize, outputDegrees, quality, paintEffect, type, FileData);		

		const response = await uiToPdfImage({
			variables: {
				outputFormat: outputFormat+"", 
				outputSize: outputSize+"", 
				rotation: outputDegrees+"", 
				quality: quality+"", 
				paintEffect: paintEffect+"", 
				type: type+"", 
				file: FileData  
			}
		});
		if (error) {
			console.log(error);
		}
		else{
			console.warn(response.data.uiToPdfImage)
			setResponse(response.data.uiToPdfImage);
			setOpen(false);			
		}

	};

	return (
		<div>
			<form onSubmit={submitForm}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.title}
						title="Ppt to Image"
						titleTypographyProps={{ variant: "h7" }}
					/>
					<CardContent>				
				<DocumentForm
					classes={classes}

					setUploadFile={setUploadFile}

					outputFormat={outputFormat}
					setOutputFormat={setOutputFormat}

					imageSize={outputSize}
					setOutputSize={setOutputSize}

					paintEffect={paintEffect}
					setPaintEffect={setPaintEffect}

					quality={quality}
					setQuality={setQuality}

					outputDegrees={outputDegrees}
					setOutputDegrees={setOutputDegrees}
					
					type={type}
					setType={setType}
				/>
					</CardContent>
					<CardActions>
						<Button
							type="submit"
							variant="contained"
							color="#83bbeb"
							fullWidth="true"
						>
							Convert
						</Button>
					</CardActions>					
					</Card>
			</form>
			<TableDocumentForm data={data} open={open} />
		</div>
	);
};

export default FormDocumentConveter;
