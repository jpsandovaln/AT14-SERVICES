import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ImgForm from "./ImgForm";
import TableImgForm from "./TableImgForm";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const UploadMutation = gql`
	mutation uiToImageConverter(
		$outputFormat: String
		$imageSize: String
		$angle: String
		$quality: String
		$dubling: String
		$paintEffect: String
		$greyScale: String
		$file: Upload
	) {
		uiToImageConverter(
			outputFormat: $outputFormat
			imageSize: $imageSize
			angle: $angle
			quality: $quality
			dubling: $dubling
			paintEffect: $paintEffect
			paintEffect: $paintEffect
			file: $file
		) {
			name
			filePath
		}
	}
`;

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
	const [t, i18n] = useTranslation("global");
	const [setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [imageSize, setImageSize] = React.useState("");
	const [angle, setAngle] = React.useState("");
	const [quality, setQuality] = React.useState("");
	const [dubling, setDubling] = React.useState("");
	const [paintEffect, setPaintEffect] = React.useState("");
	const [greyScale, setGreyScale] = React.useState("");
	const [monochrome, setMonochrome] = React.useState("");
	const [FileData, setUploadFile] = React.useState(null);
	const [setOpen] = React.useState(false);

	const [nameImage, setNameImage] = React.useState(
		t("machine-learning.form-text-file")
	);

	const [uiToImageConverter, { error }] = useMutation(UploadMutation);

	const setFileVideo = async (e) => {
		let videoFile = document.getElementById("contained-button-image");
		if (videoFile.files.length > 0) {
			setNameImage(videoFile.files.item(0).name);
			setUploadFile(e.target.files[0]);
		} else {
			setNameImage(t("machine-learning.form-text-file"));
			setUploadFile(null);
		}
	};

	const submitFormVideo = async (event) => {
		/*const urlML = "http://localhost:8080/imageFinder";
		event.preventDefault();
		setOpen(true);
		const dataArray = new FormData();

		dataArray.append("outputFormat", outputFormat);
		dataArray.append("imageSize", imageSize);
		dataArray.append("angle", angle);
		dataArray.append("quality", quality);
		dataArray.append("dubling", dubling);
		dataArray.append("paintEffect", paintEffect);
		dataArray.append("greyScale", greyScale);
		dataArray.append("monochrome", monochrome);

		
		

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

		fetchData();*/

		event.preventDefault();
		setOpen(true);
		setResponse(null);
		const data = await uiToImageConverter({
			variables: {
				outputFormat: outputFormat + "",
				imageSize: imageSize + "",
				angle: angle + "",
				quality: quality + "",
				dubling: dubling + "",
				paintEffect: paintEffect + "",
				greyScale: greyScale + "",
				monochrome: angle + "",
				file: FileData,
			},
		});
		if (error) {
			console.log(error);
		} else {
			console.log(data.data.uiToImageConverter);
			setResponse(data.data.uiToImageConverter);
			setOpen(false);
		}
	};

	return (
		<div>
			<form onSubmit={submitFormVideo}>
				<ImgForm
					classes={classes}
					outputFormat={outputFormat}
					imageSize={imageSize}
					angle={angle}
					quality={quality}
					dubling={dubling}
					paintEffect={paintEffect}
					greyScale={greyScale}
					monochrome={monochrome}
					setOutputFormat={setOutputFormat}
					setImageSize={setImageSize}
					setAngle={setAngle}
					setDubling={setDubling}
					setPaintEffect={setPaintEffect}
					setGreyScale={setGreyScale}
					setMonochrome={setMonochrome}
					setQuality={setQuality}
					nameImage={nameImage}
					setFileVideo={setFileVideo}
					setNameImage={setNameImage}
				/>
				<TableImgForm />
			</form>
		</div>
	);
};

export default FormImgConverter;
