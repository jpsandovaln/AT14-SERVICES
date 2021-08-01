import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const uploadButton = props => {
    
}

const ChooseButton = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input
                accept="*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Choose Files
                </Button>
            </label>
        </div>
    );

}

const Uploader = () => {
    return (
        <div className="container">
            {ChooseButton()}
        </div>
    );
};

export default Uploader;