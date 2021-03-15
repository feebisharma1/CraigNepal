import React from 'react';
import { Card } from '@material-ui/core';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin: 10,
        height: 200
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px'
    },
    title: {
        fontSize: 15,
    },
    pos: {
        marginBottom: 12,
    },
});

function Cards() {

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <CardActions>
                    <Button className={classes.title} color="textSecondary" gutterBottom>
                        Jobs
                    </Button>
                </CardActions>
                <Typography variant="h5" component="h2">

                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards;