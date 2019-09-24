import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles( theme => ({
    title: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: theme.spacing(10),
        textAlign: 'center',
        fontWeight: 900,
        color: 'blue',
        marginBottom: theme.spacing(2.5)
    }
}));

const Header = () => {
    const classes = useStyles();
    return(
        <Grid>
            <h1 className={classes.title}>Notes App</h1>
        </Grid>
    )
};

export default Header;