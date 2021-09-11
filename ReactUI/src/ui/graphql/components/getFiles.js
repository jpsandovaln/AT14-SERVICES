import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_FILES } from "../queries/fileQuery";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

function GetFiles() {
  const [t, i18n] = useTranslation("global");
  const { data } = useQuery(LOAD_FILES);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (data) {
      setFiles(data.files);
    }
  }, [data]);

  const classes = useStyles();

  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">{t("report-convert.report.name")}</TableCell>
            <TableCell align="right">{t("report-convert.report.checksum")}</TableCell>
            <TableCell align="right">_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((row) => (
            <TableRow>
              <TableCell align="right">{""}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.checksum}</TableCell>
              <TableCell align="right">{row._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default GetFiles;
