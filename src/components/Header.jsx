import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const useStyles = makeStyles({
    title: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: theme.spacing(10),
        textAlign: 'center',
        fontWeight: 900,
        color: 'blue',
        marginBottom: theme.spacing(2.5)
    }
});

const Header = () => {
    const classes = useStyles();
    return(
        <header>
            <h1 className={classes.title}>Notes App</h1>
        </header>
    )
};

export default Header;