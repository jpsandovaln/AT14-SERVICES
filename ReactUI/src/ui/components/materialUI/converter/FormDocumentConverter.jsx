import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import DocumentForm from "./DocumentForm";
import TableDocumentForm from "./TableDocumentForm";

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

const FormDocumentConveter = () => {
	const urlML = "http://localhost:8080/imageFinder";

	const classes = useStyles();
	const [data, setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [outputSize, setOutputSize] = React.useState("");
	const [audioFormat, setAudioFormat] = React.useState("");
	const [dubling, setDubling] = React.useState("");
	const [paintEffect, setPaintEffect] = React.useState("");
	const [greyScale, setGreyScale] = React.useState("");
	const [monochrome, setMonochrome] = React.useState("");
	const [quality, setQuality] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const submitFormVideo = (event) => {
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("outputFormat", outputFormat);
		dataArray.append("outputSize", outputSize);
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
				<DocumentForm
					classes={classes}
					outputFormat={outputFormat}
					imageSize={outputSize}
					audioFormat={audioFormat}
					dubling={dubling}
					paintEffect={paintEffect}
					greyScale={greyScale}
					monochrome={monochrome}
					quality={quality}
					setOutputFormat={setOutputFormat}
					setOutputSize={setOutputSize}
					setDubling={setDubling}
					setPaintEffect={setPaintEffect}
					setGreyScale={setGreyScale}
					setMonochrome={setMonochrome}
					setQuality={setQuality}
				/>
				<TableDocumentForm />
			</form>
		</div>
	);
};

export default FormDocumentConveter;