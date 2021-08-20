import React from "react";
import axios from "axios";
import VideoForm from "./VideoForm";
import TableVideoForm from "./TableVideoForm";
import Md5File from "../../../../utilities/checksum";

const FormVideoConveter = () => {
	const urlML = "http://localhost:8080/videoConverter";
	const md5File = new Md5File();

	const [data, setResponse] = React.useState();
	const [uploadFile, setUploadFile] = React.useState(null);
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

	let [hashVideo, setHashVideo] = React.useState();

	const setFileVideo = async (e) => {
		let file = e.target.files[0];
		hashVideo = await md5File.readFile(file);
		console.warn(hashVideo);
		setHashVideo(hashVideo);

		setUploadFile(e.target.files[0]);
	};

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
		dataArray.append("checksum", hashVideo);
		dataArray.append("file", uploadFile);
		dataArray.append("extractAudioFormat", extractAudioFormat);

		const fetchData = () => {
			setResponse();
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
				<VideoForm
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
					setFileVideo={setFileVideo}
				/>
				<TableVideoForm
					open={open}
					setOpen={setOpen}
					data={data}
					setResponse={setResponse}
				/>
			</form>
		</div>
	);
};

export default FormVideoConveter;
