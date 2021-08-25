import React from "react";
import axios from "axios";
import AudioForm from "./AudioForm";
import TableAudioForm from "./TableAudioForm";

const FormAudioConveter = () => {
	const urlML = "http://localhost:8080/imageFinder";

	const [data, setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [samplingRate, setsamplingRate] = React.useState("");
	const [invertAudio, setinvertAudio] = React.useState(false);
	const [channels, setchannels] = React.useState("");
	const [audioFade, setaudioFade] = React.useState("");
	const [bitRate, setbitRate] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("outputFormat", outputFormat);
		dataArray.append("bitRate", bitRate);
		dataArray.append("samplingRate", samplingRate);
		dataArray.append("channels", channels);
		dataArray.append("audioFade", audioFade);
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
					bitRate={bitRate}
					samplingRate={samplingRate}
					channels={channels}
					audioFade={audioFade}
					invertAudio={invertAudio}
					setOutputFormat={setOutputFormat}
					setbitRate={setbitRate}
					setsamplingRatet={setsamplingRate}
					setchannels={setchannels}
					setaudioFade={setaudioFade}
					setinvertAudio={setinvertAudio}
				/>
				<TableAudioForm />
			</form>
		</div>
	);
};

export default FormAudioConveter;
