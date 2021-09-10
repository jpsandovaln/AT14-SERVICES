import React from "react";
import VideoForm from "./VideoForm";
import TableVideoForm from "./TableVideoForm";
import Md5File from "../../../../utilities/checksum";

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const UploadMutation = gql`
  mutation videoConverter($ratio: String, $scale: String, $quality: String, $angle: String, $vflip: String, $hflip: String, $outputFormat: String, $audioFormat: String, $obtainFrames: String, $frameScale: String, $obtainAudio: String, $checksum: String, $file: Upload!, $extractAudioFormat: String) {
    videoConverter(ratio: $ratio, scale: $scale, quality: $quality, angle: $angle, vflip: $vflip, hflip: $hflip, outputFormat: $outputFormat, audioFormat: $audioFormat, obtainFrames: $obtainFrames, frameScale: $frameScale, obtainAudio: $obtainAudio, checksum: $checksum, file: $file, extractAudioFormat: $extractAudioFormat) {
		name
		filePath
    }
  }
`;

const FormVideoConveter = () => {
	const md5File = new Md5File();

	const [data, setResponse] = React.useState([]);
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
	const [nameVideo, setNameVideo] = React.useState("Select a video file");
	const [obtainAudio, setObtainAudio] = React.useState("");
	const [open, setOpen] = React.useState(false);

	let [hashVideo, setHashVideo] = React.useState();

	const [videoConverter, { error }] = useMutation(UploadMutation);

	const setFileVideo = async (e) => {
		let videoFile = document.getElementById("contained-button-video");
		if (videoFile.files.length > 0) {
			let file = e.target.files[0];
			hashVideo = await md5File.readFile(file);
			console.warn(hashVideo);
			setNameVideo(videoFile.files.item(0).name);
			setHashVideo(hashVideo);
			setUploadFile(e.target.files[0]);
		} else {
			setNameVideo("Select a video file");
			setUploadFile(null);
		}
	};

	const submitFormVideo = async (event) => {

		event.preventDefault();
		setOpen(true);
		setResponse(null);
		const data = await videoConverter({
			variables: {
				ratio: ratio+"",
				scale: scale+"",
				quality: quality+"",
				angle: angle+"",
				vflip: vflip+"",
				hflip: hflip+"",
				outputFormat: outputFormat+"",
				audioFormat: audioFormat+"",
				obtainFrames: obtainFrames+"",
				frameScale: frameScale+"",
				obtainAudio: obtainAudio+"",
				checksum: hashVideo+"",
				file: uploadFile,
				extractAudioFormat: extractAudioFormat+""
			}
		  });
		  if (error) {
			console.log(error);
		  }
		  else{
			console.log(data.data.videoConverter);  
			setResponse(data.data.videoConverter);
			setOpen(false);		  
		  }
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
					nameVideo={nameVideo}
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
					setNameVideo={setNameVideo}
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

