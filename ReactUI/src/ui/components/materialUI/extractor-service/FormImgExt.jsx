import React from "react";
import ImgExtForm from "./ImgExtForm";
import TableImgExtForm from "./TableImgExtForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardActions } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const UploadMutation = gql`
  mutation uiToImageText($language: String, $file: Upload!) {
    uiToImageText(language: $language, file: $file) {
      text
    }
  }
`;

const FormImgExt = () => {

	const [data, setResponse] = React.useState(Object);
	const [FileData, setUploadFile] = React.useState(null);
	const [language, setLanguage] = React.useState("");
	const [uiToImageText, { error }] = useMutation(UploadMutation);

	const submitImage = async (event) => {
		event.preventDefault();
		const response = await uiToImageText({
			variables: {
			  language: language+"",
			  file: FileData  
			}
		  });
		  if (error) {
			console.log(error);
		  }
		  else{
			setResponse(response.data.uiToImageText);
		  }
	};

	return (
		<div>
			<form onSubmit={submitImage}>
			<Card>
				<CardContent>
					<ImgExtForm
						setLanguage={setLanguage}
						setUploadFile={setUploadFile}
					/>
				</CardContent>
				<CardActions>
					<Button
						type="submit"
						variant="contained"
						color="#83bbeb"
					>
						Extract
					</Button>
				</CardActions>
			</Card>
			</form>
			<TableImgExtForm
				data={data}
			/>		
		</div>
	);
};

export default FormImgExt;
