import React from "react";
import MetadataForm from "./MetadataForm";
import TableMetadataForm from "./TableMetadataForm";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const UploadMutation = gql`
	mutation metaData(
		$file: Upload!
	) {
		metaData(
			file: $file
		) {
			name
			filePath
		}
	}
`;

const FormMetadata = () => {
	const [t, i18n] = useTranslation("global");	
	const [data, setResponse] = React.useState([]);
	const [FileData, setUploadFile] = React.useState(null);
	const [nameVideo, setNameVideo] = React.useState(t("extractor-service.metadata.form-file"));
	const [metaData, { error }] = useMutation(UploadMutation);

	const [open, setOpen] = React.useState(false);

	const setFileVideo = async (e) => {
		let videoFile = document.getElementById("matadata-button-file");

		if (videoFile.files.length > 0) {
			setNameVideo(videoFile.files.item(0).name);
			setUploadFile(e.target.files[0]);
		} else {
			setNameVideo(t("extractor-service.metadata.form-file"));
			setUploadFile(null);
		}
	};

	const submitFormMetadata = async (event) => {
		
		event.preventDefault();
		setOpen(true);
		const response = await metaData({
			variables: {
			  file: FileData  
			}
		  });
		  if (error) {
			console.log(error);
		  }
		  else{
			setResponse(response.data.metaData);
			setOpen(false);	
			
		  }
		  
	};

	return (
		<div>
			<form onSubmit={submitFormMetadata}>
				<MetadataForm
					setUploadFile={setUploadFile}
					nameVideo={nameVideo}
					setNameVideo={setNameVideo}
					setFileVideo={setFileVideo}
				/>
				<TableMetadataForm
					open={open}
					setOpen={setOpen}
					data={data}
					setResponse={setResponse}
				/>
			</form>
		</div>
	);
};

export default FormMetadata;
