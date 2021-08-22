import React from "react";
import axios from "axios";
import DocumentPptForm from "./DocumentPptForm";
import TablePptForm from "./TablePptForm";

const FormPptConveter = () => {
	const urlML = "http://localhost:8080/imageFinder";

	const [data, setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [ratio, setRatio] = React.useState("");
	const [scale, setScale] = React.useState("");
	const [audioFormat, setAudioFormat] = React.useState("");
	const [quality, setQuality] = React.useState("");
	const [angle, setAngle] = React.useState("");
	const [hflip, sethFlip] = React.useState(false);
	const [vflip, setvFlip] = React.useState(false);
	const [frameScale, setFrameScale] = React.useState("");
	const [obtainFrames, setObtainFrames] = React.useState(false);
	const [extractAudioFormat, setExtractAudioFormat] = React.useState("");
	const [obtainAudio, setObtainAudio] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("ratio", ratio);
		dataArray.append("scale", scale);
		dataArray.append("quality", quality);
		dataArray.append("angle", angle);
		dataArray.append("vflip", vflip);
		dataArray.append("hflip", hflip);
		dataArray.append("outputFormat", outputFormat);
		dataArray.append("audioFormat", audioFormat);
		dataArray.append("obtainFrames", obtainFrames);
		dataArray.append("frameScale", frameScale);
		dataArray.append("obtainAudio", obtainAudio);

		dataArray.append("extractAudioFormat", extractAudioFormat);

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
			<form onSubmit={submitFormVideo}>
				<DocumentPptForm
					ratio={ratio}
					scale={scale}
					quality={quality}
					angle={angle}
					vflip={vflip}
					hflip={hflip}
					outputFormat={outputFormat}
					audioFormat={audioFormat}
					obtainFrames={obtainFrames}
					frameScale={frameScale}
					obtainAudio={obtainAudio}
					extractAudioFormat={extractAudioFormat}
					setOutputFormat={setOutputFormat}
					setRatio={setRatio}
					setScale={setScale}
					setAudioFormat={setAudioFormat}
					setQuality={setQuality}
					setAngle={setAngle}
					sethFlip={sethFlip}
					setvFlip={setvFlip}
					setFrameScale={setFrameScale}
					setObtainFrames={setObtainFrames}
					setExtractAudioFormat={setExtractAudioFormat}
					setObtainAudio={setObtainAudio}
				/>
				<TablePptForm />
			</form>
		</div>
	);
};

export default FormPptConveter;
