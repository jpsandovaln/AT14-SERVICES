import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import TableBody from "@material-ui/core/TableBody";
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

const TableVideoForm = (classes) => {
	const clas = useStyles();
	const [t, i18n] = useTranslation("global");	
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card className={clas.card}>
					<CardHeader
						className={clas.title}
						title="Results"
						titleTypographyProps={{ variant: "h7" }}
					/>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs>
								<Button
									type="submit"
									variant="contained"
									color="#83bbeb"
								>
									{t("convert.video.convert")}
								</Button>
							</Grid>
						</Grid>
						<Grid container spacing={12}>
							<Grid item xs>
								<TableContainer>
									<Table
										className={classes.table}
										size="small"
										aria-label="a dense table"
									>
										<TableHead>
											<TableRow>
												<TableCell align="center">
													{t("convert.video.name")}
												</TableCell>
												<TableCell align="center">
													{t("convert.video.file-path")}
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{classes.data &&
												classes.data.map((row) => (
													<TableRow key={row.name}>
														<TableCell align="center">
															{row.name}
														</TableCell>
														<TableCell align="center">
															<a
																href={
																	row.filePath
																}
																without
																rel="noreferrer"
																target="_blank"
																download
															>
																{t("convert.video.download")}
															</a>
														</TableCell>
													</TableRow>
												))}
										</TableBody>
									</Table>
									{classes.open ? <LinearProgress /> : ""}
								</TableContainer>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default TableVideoForm;
