import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
	card: {
		height: "100%",
	},
	input: {
		display: "none",
	},
	root: {
		width: 300,
	},
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const ImageExtForm = (promps) => {
	const [t, i18n] = useTranslation("global");
	const classes = useStyles();
	return (
			<Grid container spacing={3} xs={12}>
				<Grid item md={6} xs={12}>
					<TextField
						fullWidth
						id="outlined-basic"
						label={t("extractor-service.image-text.language")}
						variant="outlined"
						placeholder={"Language"}
						onChange={(e) =>
							promps.setLanguage(e.target.value)
						}
						required
					/>
				</Grid>	
				<Grid item md={6} xs={12}>					
					<input
						accept="image/*"
						className={classes.input}
						id="contained-button-file"
						name="contained-button-file"						
						type="file"
						onChange={(e) => 
							promps.setUploadFile(e.target.files[0])
						}
						required
					/>
					<label htmlFor="contained-button-file">
						<Button
							variant="contained"
							color="#83bbeb"
							component="span"
						>
						{t("extractor-service.image-text.upload")}
						</Button>
					</label>
				</Grid>
			</Grid>
	);
};

export default ImageExtForm;
