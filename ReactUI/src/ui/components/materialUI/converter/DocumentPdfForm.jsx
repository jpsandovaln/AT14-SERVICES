import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";

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

const DocumentPdfForm = (promp) => {
	const classes = useStyles();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardContent>
						<input
							accept="document/*"
							className={classes.input}
							id="contained-button-file"
							multiple
							type="file"
							required
						/>
						<label htmlFor="contained-button-file">
							<Button
								variant="contained"
								color="primary"
								component="span"
							>
								Upload
							</Button>
						</label>
					</CardContent>
				</Card>
			</Grid>
			<Grid item xs={4}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.title}
						title="Pdf to Image"
						titleTypographyProps={{ variant: "h6" }}
					/>
					<CardContent>
						<Grid container spacing={6}>
							<Grid item xs>
								<FormControl
									variant="outlined"
									className={classes.formControl}
									fullWidth
								>
									<InputLabel id="demo-simple-select-outlined-label">
										Output Formart
									</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										label="Output Format"
										value={promp.outputFormat}
										onChange={(e) =>
											promp.setOutputFormat(
												e.target.value
											)
										}
										required
									>
										<MenuItem value="">
											<em>-</em>
										</MenuItem>
										<MenuItem value={"Output1"}>
											.png
										</MenuItem>
										<MenuItem value={"Output2"}>
											.jpeg
										</MenuItem>
                                        <MenuItem value={"Output3"}>
											.jpg
										</MenuItem>
                                        <MenuItem value={"Output4"}>
											.bmp
										</MenuItem>
                                        <MenuItem value={"Output5"}>
											.raw
										</MenuItem>
                                        <MenuItem value={"Output6"}>
											.tiff
										</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
					</CardContent>					
				</Card>
			</Grid>
		</Grid>
	);
};

export default DocumentPdfForm;
