import React from "react";
import axios from "axios";
import MetadataForm from "./MetadataForm";
import TableMetadataForm from "./TableMetadataForm";

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
			params
		}
	}
`;

const FormMetadata = () => {
	const urlML = "http://localhost:4050/filesMetadata";
	const [data, setResponse] = React.useState([]);
	const [FileData, setUploadFile] = React.useState(null);
	const [nameVideo, setNameVideo] = React.useState("Select a video file");
	const [uiToVideoConverter, { error }] = useMutation(UploadMutation);

	const [open, setOpen] = React.useState(false);

	const setFileVideo = async (e) => {
		let videoFile = document.getElementById("matadata-button-file");

		if (videoFile.files.length > 0) {
			setNameVideo(videoFile.files.item(0).name);
			setUploadFile(e.target.files[0]);
		} else {
			setNameVideo("Select a video file");
			setUploadFile(null);
		}
	};

	const submitFormMetadata = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();
		dataArray.append("file", FileData);

		const fetchData = () => {
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
