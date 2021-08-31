import React from "react";
import axios from "axios";
import AudioForm from "./AudioForm";
import TableAudioForm from "./TableAudioForm";

const FormAudioConveter = () => {
	const urlML = "http://localhost:8080/imageFinder";
	const [setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [samplingRate, setsamplingRate] = React.useState("");
	const [invertAudio, setinvertAudio] = React.useState("");
	const [channels, setchannels] = React.useState("");
	const [fadeIn, setFadeIn] = React.useState("");
	const [fadeOut, setFadeOut] = React.useState("");
	const [setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("outputFormat", outputFormat);
		dataArray.append("samplingRate", samplingRate);
		dataArray.append("channels", channels);
		dataArray.append("fadeIn", fadeIn);
		dataArray.append("fadeOut", fadeOut);
		dataArray.append("invertAudio", invertAudio);

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
					return(error);
				});
		};

		fetchData();
	};

	return (
		<div>
			<form onSubmit={submitFormVideo}>
				<AudioForm
					outputFormat={outputFormat}
					samplingRate={samplingRate}
					channels={channels}
					fadeIn={fadeIn}
					fadeOut={fadeOut}
					invertAudio={invertAudio}
					setOutputFormat={setOutputFormat}
					setFadeIn = {setFadeIn}
					setFadeOut = {setFadeOut}
					setsamplingRatet={setsamplingRate}
					setchannels={setchannels}
					setinvertAudio={setinvertAudio}
				/>
				<TableAudioForm />
			</form>
		</div>
	);
};

export default FormAudioConveter;
