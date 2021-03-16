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
    body: {
        fontSize: 10,
    },
    pos: {
        marginBottom: 12,
    },
});


function Cards(props) {
    console.log("HITest::", props.jobs);
    let jobsList = props.jobs.map(job => <li>{job}</li>);
    console.log("JOblsit", jobsList);

    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <CardActions>
                    <Button className={classes.title}>
                        Jobs
                    </Button>
                </CardActions>
                <Typography variant="h5" component="h5" className={classes.body}>
                    {jobsList}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Cards;