import React from "react";
import Paper from "@material-ui/core/Paper";
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
import TableBody from "@material-ui/core/TableBody";
import { useTranslation } from "react-i18next";

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

const TableImgForm = (promp) => {
	const classes = useStyles();

	const [t, i18n] = useTranslation("global");

	const contentTab = () => {
		if (promp.data!=null&&promp.data!="") {
			return (
				<TableRow>
					<TableCell align="center">{promp.data.name}</TableCell>
					<TableCell align="center">
						<a
							href={promp.data.url}
							without
							rel="noreferrer"
							target="_blank"
							download
						>
							{t("extractor-service.metadata.download")}
						</a>
					</TableCell>
				</TableRow>
			);
		} else {
			return "";
		}
	};

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Card className={classes.card}>
					<CardHeader
						className={classes.title}
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
									Convert
								</Button>
							</Grid>
						</Grid>
						<Grid container spacing={6}>
							<Grid item xs>
								<TableContainer component={Paper}>
									<Table
										className={classes.table}
										size="small"
										aria-label="a dense table"
									>
										<TableHead>
											<TableRow>
												<TableCell align="center">
                                                                                                {t("extractor-service.metadata.name")}
												</TableCell>
												<TableCell align="center">
                                                                                                {t("extractor-service.metadata.metadata")}
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>{contentTab()}</TableBody>
									</Table>
								</TableContainer>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default TableImgForm;
