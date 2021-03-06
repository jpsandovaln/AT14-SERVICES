import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTranslation } from "react-i18next";

const TableML = (classes) => {
	const [t, i18n] = useTranslation("global");	
	return (
		<div>
			<TableContainer>
				<Table
					className={classes.table}
					size="small"
					aria-label="a dense table"
				>
					<TableHead>
						<TableRow>
							<TableCell align="center">{t("machine-learning.table-algorithm")}</TableCell>
							<TableCell align="center">{t("machine-learning.table-word")}</TableCell>
							<TableCell align="center">{t("machine-learning.table-percentage")}</TableCell>
							<TableCell align="center">{t("machine-learning.table-second")}</TableCell>
							<TableCell align="center">{t("machine-learning.table-image")}</TableCell>
							<TableCell align="center">{t("machine-learning.table-options")}</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{classes.data &&
							classes.data.map((row) => (
								<TableRow key={row.name}>
									<TableCell align="center">
										{row.Algorithm}
									</TableCell>
									<TableCell align="center">
										{row.Word}
									</TableCell>
									<TableCell align="center">
										{(row.Percentage * 100).toFixed(0)} %
									</TableCell>
									<TableCell align="center">
										{row.Second}
									</TableCell>
									<TableCell align="center">
										<img
											src={row.PathImage}
											width="60"
											height="60"
											alt="prueba"
										/>
									</TableCell>
									<TableCell align="center">
										<a
											href={row.PathImage}
											without
											rel="noreferrer"
											target="_blank"
											download
										>
											{t("machine-learning.table-image")}
										</a>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
				{classes.open ? <LinearProgress /> : ""}
			</TableContainer>
		</div>
	);
};

export default TableML;
