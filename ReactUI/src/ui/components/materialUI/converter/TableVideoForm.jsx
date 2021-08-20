import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Card className={clas.card}>
					<CardHeader
						className={clas.title}
						title="Results"
						titleTypographyProps={{ variant: "h6" }}
					/>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs>
								<Button
									type="submit"
									variant="contained"
									color="primary"
								>
									Convert
								</Button>
							</Grid>
						</Grid>
						<Grid container spacing={6}>
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
													Word
												</TableCell>
												<TableCell align="center">
													File Path
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
															{row.filePath}
														</TableCell>
													</TableRow>
												))}
										</TableBody>
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

export default TableVideoForm;
