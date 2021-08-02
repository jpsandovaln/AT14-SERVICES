import React from "react";
import UploadImages from "./images-upload";
import Uploader from "./uploader/uploader";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home(props) {
  const classes = useStyles();
  const content = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography gutterBottom variant="h5" component="h2">
            Converter
          </Typography>
        </Grid>
      </Grid>

      {/* <div className="content">
        <UploadImages />
        <Uploader />
      </div> */}
    </div>
  );
}

export default Home;
