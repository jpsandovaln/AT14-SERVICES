import React from 'react';
import Button from '@material-ui/core/Button';

/*
const StyledButton = withStyles({
    root: {
      backgroundColor: '#11BB1F',
      borderRadius: 3,
      border: '1px solid',
      borderColor: 'black',
      color: 'white',
      padding: '0 45px',
      '&:hover': {
        backgroundColor: '#55F762',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#11BB1F',
        borderColor: 'white',
      },      
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);


export default function AnalyzeButton() {
    return <StyledButton>  </StyledButton>
}
*/
export default function UploadButton() {
    
    return (
        <div>
            <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span" >
                    Analyze        
                </Button>
            </label>
        </div>
    );
}