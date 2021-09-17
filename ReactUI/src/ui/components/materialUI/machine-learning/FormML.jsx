import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
	input: {
		display: "none",
	},		
	title: {
		color: "white",
		fontSize: 12,
		backgroundColor: "#3a4651",
	},
}));

const FormML = (classes) => {
	const clase = useStyles();
	const [t, i18n] = useTranslation("global");	
	return (
		<div>
			<Card className={clase.root}>
				<CardHeader
					title={t("machine-learning.form-title")}
					className={clase.title}
					titleTypographyProps={{ variant: "h6" }}
				></CardHeader>
				<CardContent>
					<Grid container spacing={1}>
						<Grid item md={4} xs={12} spacing={1}>
							<TextField
								fullWidth
								id="outlined-basic"
								label={t("machine-learning.form-search-word")}
								variant="outlined"
								placeholder={t("machine-learning.form-search-word")}
								onChange={(e) =>
									classes.setSearchWord(e.target.value)
								}
								required
							/>
						</Grid>
						<Grid item md={4} xs={12} spacing={1}>
							<FormControl
								variant="outlined"
								className={classes.formControl}
								fullWidth
							>
								<InputLabel id="demo-simple-select-percentage-label">
									{t("machine-learning.form-percentage")}
								</InputLabel>
								<Select
									labelId="demo-simple-select-percentage-label"
									id="demo-simple-select-percentage"
									value={classes.percentage}
									onChange={(e) =>
										classes.setPercentage(e.target.value)
									}
									label={t("machine-learning.form-percentage")}
									required
								>
									<MenuItem value="">
										<em>-</em>
									</MenuItem>
									<MenuItem value={0.1}>10%</MenuItem>
									<MenuItem value={0.2}>20%</MenuItem>
									<MenuItem value={0.3}>30%</MenuItem>
									<MenuItem value={0.4}>40%</MenuItem>
									<MenuItem value={0.5}>50%</MenuItem>
									<MenuItem value={0.6}>60%</MenuItem>
									<MenuItem value={0.7}>70%</MenuItem>
									<MenuItem value={0.8}>80%</MenuItem>
									<MenuItem value={0.9}>90%</MenuItem>
									<MenuItem value={1.0}>100%</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item md={4} xs={12} spacing={1}>
							<FormControl
								variant="outlined"
								className={classes.formControl}
								fullWidth
							>
								<InputLabel id="demo-simple-select-outlined-label">
									{t("machine-learning.form-algorithm")}
								</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									value={classes.algorithm}
									onChange={(e) =>
										classes.setAlgorithm(e.target.value)
									}
									label={t("machine-learning.form-algorithm")}
									required
								>
									<MenuItem value="">
										<em>-</em>
									</MenuItem>
									<MenuItem value={"CocoSSD"}>
										CocoSSD
									</MenuItem>
									<MenuItem value={"MobilNet"}>
										MobilNet
									</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item md={12} xs={12}>
							<div className={classes.root}>
								<input
									accept="zip/*"
									className={clase.input}
									id="contained-button-video"
									name="contained-button-video"
									type="file"
									required
									onChange={classes.setFileVideo}
								/>
								<label htmlFor="contained-button-video">
									<Button
										variant="contained"
										color="#83bbeb"
										component="span"
									>
										{t("machine-learning.form-upload")}
									</Button>
									<InputLabel>
										
									</InputLabel>
								</label>								
							</div>

							<Grid item md={4} >
								<TextField
									fullWidth
									id="outlined-basic"
									variant="outlined"
									value={classes.nameVideo}
									disabled
								/>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Button type="submit" variant="contained" color="default">
						{t("machine-learning.form-analyze")}
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};
export default FormML;
