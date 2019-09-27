import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles( theme => ({
    title: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: theme.spacing(10),
        textAlign: 'center',
        fontWeight: 900,
        color: 'blue',
        margin: theme.spacing(4, 0)
    }
}));

const Header = () => {
    const classes = useStyles();
    return(
        <Grid>
            <Typography variant="h1" className={classes.title}>Notes App</Typography>
        </Grid>
    )
};

export default Header;