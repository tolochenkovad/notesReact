import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: '80px',
        textAlign: 'center',
        fontWeight: 900,
        color: 'blue',
        marginBottom: '20px'
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