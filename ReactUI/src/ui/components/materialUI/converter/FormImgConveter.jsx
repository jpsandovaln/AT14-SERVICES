import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgForm from "./ImgForm";
import TableImgForm from "./TableImgForm";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const UploadMutation = gql`
  mutation uiToImageConvert($outputFormat: String, $resize: String, $rotate: String, $quality: String, $doubling: String, $paint: String, $grayScale: String, $monochrome: String, $file: Upload!) {
    uiToImageConvert(outputFormat: $outputFormat, resize: $resize, rotate: $rotate, quality: $quality, doubling: $doubling, paint: $paint, grayScale: $grayScale, monochrome: $monochrome, file: $file) {
		name
		url
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
	const [data,setResponse] = React.useState([]);
	const [outputFormat, setOutputFormat] = React.useState("");
	const [imageSize, setImageSize] = React.useState("");
	const [angle, setAngle] = React.useState("");
	const [quality, setQuality] = React.useState("");
	const [dubling, setDubling] = React.useState("");
	const [paintEffect, setPaintEffect] = React.useState("");
	const [greyScale, setGreyScale] = React.useState("");
	const [monochrome, setMonochrome] = React.useState("");
	const [FileData, setUploadFile] = React.useState(null);
	const [open,setOpen] = React.useState(false);

	const [nameImage, setNameImage] = React.useState(
		t("machine-learning.form-text-file")
	);

	const [uiToImageConvert, { error }] = useMutation(UploadMutation);

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
		event.preventDefault();
		setOpen(true);
		setResponse(null);
		
		const data = await uiToImageConvert({
			variables: {
				outputFormat: outputFormat + "",
				resize: imageSize + "",
				rotate: angle + "",
				quality: quality + "",
				doubling: dubling + "",
				paint: paintEffect + "",
				grayScale: greyScale + "",
				monochrome: monochrome + "",
				file: FileData,
			},
		});
		if (error) {
			console.log(error);
		} else {
			setResponse(data.data.uiToImageConvert);
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
				<TableImgForm 					
					open={open}
					setOpen={setOpen}
					data={data}
					setResponse={setResponse}
					/>
			</form>
		</div>
	);
};

export default FormImgConverter;
