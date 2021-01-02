import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Resume() {

    const classes = useStyles();
    const resumeLink = {

    }

    return (
        <div>
            <a
               href = "https://drive.google.com/file/d/1U0V69Pm1eVvFEQElhzmX3DGN60zQaylR/view?usp=sharing" 
               target = "__blank"
            >
                <Button color = "secondary" variant = "outlined" size = "large">
                    View my resume here!
                </Button>
            </a>
        </div>
    )
}

export default Resume
