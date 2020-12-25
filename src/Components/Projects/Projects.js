import React from 'react'
import { projectDetails } from '../../constants/Project'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  

const Projects = () => {
    const classes = useStyles();
    return (
        <div>
            {projectDetails.map((value) => (
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={value.image}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {value.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {value.description}
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
    )
}

export default Projects