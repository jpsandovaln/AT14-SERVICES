import React from "react";
// import UploadImages from "./images-upload";
// import Uploader from "./uploader/uploader";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UploadImages from "../../components/images-upload";
import { Button } from "@material-ui/core";
import CenteredTabs from "../../components/tab-panel/TabPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  paper: {
    margin: theme.spacing(0, 20, 5, 20),
    padding: theme.spacing(2),
    color: theme.palette.info.main,
  },
  paperUploader: {
    margin: theme.spacing(0, 20, 5, 20),
    padding: theme.spacing(5),
  },
  text: {
    margin: theme.spacing(0),
  },
}));

function Converter(props) {
  const classes = useStyles();
  const content = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0} variant="outlined">
            <Typography className={classes.text} gutterBottom variant="h5">
              CONVERTER
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper
            className={classes.paperUploader}
            elevation={0}
            variant="outlined"
          >
            <UploadImages />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs>
          <Paper
            className={classes.paperUploader}
            elevation={0}
            variant="outlined"
          >
            <CenteredTabs />
          </Paper>
        </Grid>
      </Grid>

      {/* <div className="content">
        <UploadImages />
        <Uploader />
      </div> */}
    </div>
  );
}

export default Converter;
