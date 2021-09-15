import React from "react";
import AudioForm from "./AudioForm";
import TableAudioForm from "./TableAudioForm";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const UploadMutation = gql`
  mutation uiToSoundConverter($outputFormat: String, $FadeIn: String, $FadeOut: String, $file: Upload!) {
    uiToSoundConverter(outputFormat: $outputFormat, FadeIn: $FadeIn, FadeOut: $FadeOut, file: $file) {
		name
		filePath
    }
  }
`;

const FormAudioConveter = () => {
	const [t, i18n] = useTranslation("global");
	const [data,setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [fadeIn, setFadeIn] = React.useState("");
	const [fadeOut, setFadeOut] = React.useState("");
	const [FileData, setUploadFile] = React.useState(null);
	const [open,setOpen] = React.useState(false);
	const [nameAudio, setNameAudio] = React.useState(
		t("machine-learning.form-text-file")
	);

	
	const [uiToSoundConverter, { error }] = useMutation(UploadMutation);

	const setFileAudio = async (e) => {
		let videoFile = document.getElementById("contained-button-audio");
		if (videoFile.files.length > 0) {
			setNameAudio(videoFile.files.item(0).name);
			setUploadFile(e.target.files[0]);
		} else {
			setNameAudio(t("machine-learning.form-text-file"));
			setUploadFile(null);
		}
	};

	const submitFormVideo = async (event) => {

		event.preventDefault();
		setOpen(true);
		setResponse(null);
		
		const data = await uiToSoundConverter({
			variables: {
				outputFormat: outputFormat + "",
				FadeIn: fadeIn + "",
				FadeOut: fadeOut + "",
				file: FileData,
			},
		});
		if (error) {
			console.log(error);
		} else {
			console.warn(data.data.uiToSoundConverter);
			setResponse(data.data.uiToSoundConverter);
			setOpen(false);
		}
	};

	return (
		<div>
			<form onSubmit={submitFormVideo}>
				<AudioForm
					outputFormat={outputFormat}
					fadeIn={fadeIn}
					fadeOut={fadeOut}
					setOutputFormat={setOutputFormat}
					setFadeIn = {setFadeIn}
					setFadeOut = {setFadeOut}
					nameAudio={nameAudio}
					setFileAudio={setFileAudio}
					setNameAudio={setNameAudio}
				/>
				<TableAudioForm 
					open={open}
					setOpen={setOpen}
					data={data}
					setResponse={setResponse}
				/>
			</form>
		</div>
	);
};

export default FormAudioConveter;
