import React from 'react'
import { projectDetails } from '../../constants/Project'
import './Projects.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      background: 'white'
    },
    media: {
      height: 140,
    },
  });
  
//   rgb(218, 220, 250)
//   rgb(227, 238, 255)

const Projects = () => {
    const classes = useStyles();
    return (
        <div style = {{paddingTop: '20px', background: '  rgb(227, 238, 255)', marginTop: '-10px', paddingBottom: '70px'}}>
            <h1 className = "heading">Projects</h1>
        <div className = "grid-container">
            {projectDetails.map((value) => (
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={value.image}
                title={value.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {value.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {value.description} ({value.date})
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" target = "_blank" href = {value.gitHub} color="primary">
                View on GitHub
            </Button>
            <Button size="small" target = "_blank" href = {value.url} color="primary">
                View Live Project
            </Button>
            </CardActions>
        </Card>
        ))}
      </div>
      </div>
    )
}

export default Projects
