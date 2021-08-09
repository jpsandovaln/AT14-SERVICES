import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import LinearProgress from "@material-ui/core/LinearProgress";

const TableML = (classes, open, setOpen, data, setResponse) => {
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
							<TableCell>Algorithm</TableCell>
							<TableCell align="right">Word</TableCell>
							<TableCell align="right">Percentage</TableCell>
							<TableCell align="right">Second</TableCell>
							<TableCell align="right">Image</TableCell>
							<TableCell align="right">Options</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{classes.data &&
							classes.data.map((row) => (
								<TableRow key={row.name}>
									<TableCell align="right">
										{row.Algorithm}
									</TableCell>
									<TableCell align="right">
										{row.Word}
									</TableCell>
									<TableCell align="right">
										{(row.Percentage+100).toFixed(0)} %
									</TableCell>
									<TableCell align="right">
										{row.Second}
									</TableCell>
									<TableCell align="right">
										<img
											src={row.PathImage}
											width="60"
											height="60"
											alt="prueba"
										/>
									</TableCell>
									<TableCell align="right">
										<a
											href={row.PathImage}
											without
											rel="noreferrer"
											target="_blank"
											download
										>
											imagen
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
