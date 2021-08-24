import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ImgForm from "./ImgForm";
import TableImgForm from "./TableImgForm";

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

const FormImgConverter = () => {
	const classes = useStyles();
	const [data, setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [imageSize, setImageSize] = React.useState("");
	const [audioFormat, setAudioFormat] = React.useState("");
	const [dubling, setDubling] = React.useState("");
	const [paintEffect, setPaintEffect] = React.useState("");
	const [greyScale, setGreyScale] = React.useState("");
	const [monochrome, setMonochrome] = React.useState("");
	const [quality, setQuality] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		const urlML = "http://localhost:8080/imageFinder";
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("outputFormat", outputFormat);
		dataArray.append("imageSize", imageSize);
		dataArray.append("audioFormat", audioFormat);
		dataArray.append("dubling", dubling);
		dataArray.append("paintEffect", paintEffect);
		dataArray.append("greyScale", greyScale);
		dataArray.append("monochrome", monochrome);
		dataArray.append("quality", quality);

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
				<ImgForm
					classes={classes}
					outputFormat={outputFormat}
					imageSize={imageSize}
					audioFormat={audioFormat}
					dubling={dubling}
					paintEffect={paintEffect}
					greyScale={greyScale}
					monochrome={monochrome}
					quality={quality}
					setOutputFormat={setOutputFormat}
					setImageSize={setImageSize}
					setAudioFormat={setAudioFormat}
					setDubling={setDubling}
					setPaintEffect={setPaintEffect}
					setGreyScale={setGreyScale}
					setMonochrome={setMonochrome}
					setQuality={setQuality}
				/>
				<TableImgForm/>
			</form>

			
		</div>
	);
};

export default FormImgConverter;
