import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

/*
const styles = makeStyles(theme=>({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    }
}));
*/

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  table: {
    minWidth: 650,
  },  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },  
}));


function createData(Algorithm, Word, Percentage, Second) {
  return { Algorithm, Word, Percentage, Second };
}

const rows = [
  createData('Algorithm', 159, 6.0, 24, 4.0),
  createData('Word', 237, 9.0, 37, 4.3),
  createData('Percentage', 262, 16.0, 24, 6.0),
  createData('Second', 305, 3.7, 67, 4.3),
];


const FileUpload = () =>{

    //const data = Array();

    const urlML = "http://localhost:8080/analizeZip";    

    const [data, setResponse] = React.useState([]);
    const [uploadFile, setUploadFile] = React.useState(null);
    const [searchWord, setSearchWord] = React.useState("");
    const [algorithm, setAlgorithm] = React.useState("");
    const [percentage, setPercentage] = React.useState("");
    const [age, setAge] = React.useState('');

    
    const submitForm = (event) => {
      event.preventDefault();
      const algorithm1 = "MobilNet";
      const dataArray = new FormData();
      dataArray.append("searchWord", searchWord);
      dataArray.append("algorithm", algorithm1);
      dataArray.append("percentage", percentage);
      dataArray.append("zipFile", uploadFile);
  
      const fetchData = () => {
          axios
          .post(urlML, dataArray, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => {
            setResponse(res.data);
            console.log(res.data);
            
          })
          .catch((error) => {
              console.log(error);
          });
      };  

      fetchData();


    };
  
    const uploadInputRef = useRef(null);
    const classes = useStyles();

    

    const handleChangeX = (event) => {
      setAge(event.target.value);
    };


   

    return (
        <div>
          <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Home
            </Link>
            <Typography color="textPrimary">Machine Learning</Typography>
          </Breadcrumbs>
          </div>

          <Card className={classes.root}>
            <CardHeader title="Machine Learning Analizer">
            </CardHeader>
            <CardContent>
            <div className={classes.root}>
                <Grid container spacing={1}>
                  <Grid container item xs={4} spacing={3}>
                    <TextField required id="standard-required" label="Required" label="Search Word" />
                  </Grid>
                  <Grid container item xs={4} spacing={3}>
                    <FormControl className={classes.formControl}>
                      <Select
                        value={age}
                        onChange={handleChangeX}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="" disabled>
                          Placeholder
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      <FormHelperText>Placeholder</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid container item xs={4} spacing={3}>
                  <TextField required id="standard-required" label="Required" label="Percentage" />
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid container item xs={4} spacing={3}>
                    <input
                      ref={uploadInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      
                    />
                    <Button
                      onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                      variant="contained"
                    >
                      Choose File
                    </Button>
                  </Grid>
                  <Grid container item xs={4} spacing={3}>
                    &nbsp;
                  </Grid>
                  <Grid container item xs={4} spacing={3}>
                    &nbsp;
                  </Grid>
                </Grid>  



                <Grid container spacing={1}>
                  <Grid container item xs={4} spacing={3}>
                        &nbsp;
                  </Grid>
                  <Grid container item xs={4} spacing={3}>
                    &nbsp;
                  </Grid>
                  <Grid container item xs={4} spacing={3}>
                    &nbsp;
                  </Grid>
                </Grid>             


              </div>

            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">Submit</Button>
            </CardActions>
          </Card>



              


        <br />
        <form onSubmit={submitForm}>
          <input type="text" placeholder={"SearchWord"} onChange={(e) => setSearchWord(e.target.value)} />
          <select  onChange={(e) => setAlgorithm(e.target.value)}>
              <option value="CocoSSD">CocoSSD</option>
              <option value="MobilNet">MobilNet</option>
          </select>
          <input type="text" placeholder={"Percentage"}  onChange={(e) => setPercentage(e.target.value)}/>
          <br />
          <input type="file" onChange={(e) => setUploadFile(e.target.files[0])} />
          <br />
          <input type="submit" />
        </form>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="right">Algorithm</TableCell>
                <TableCell align="right">Word</TableCell>
                <TableCell align="right">Percentaje</TableCell>
                <TableCell align="right">Second</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {""}
                  </TableCell>
                  <TableCell align="right">{row.Algorithm}</TableCell>
                  <TableCell align="right">{row.Word}</TableCell>
                  <TableCell align="right">{row.Percentage}</TableCell>
                  <TableCell align="right">{row.Second}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>        
        </div>
    )
}
export default FileUpload;
