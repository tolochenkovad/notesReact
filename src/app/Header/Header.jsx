import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FormattedMessage} from "react-intl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    title: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: theme.spacing(10),
        textAlign: 'center',
        fontWeight: 900,
        color: 'blue',
        margin: theme.spacing(4, 0)
    },
    container: {
        padding: '0 20px'
    },
    btn: {
        marginRight: '20px',
        marginBottom: '20px'
    }
}));

const Header = ({changeLocale}) => {
    const classes = useStyles();

    const [isDisabled, setDisabled] = useState(false);

    const handleClickBtn = (e) => {
        const languageValue = e.currentTarget.innerText;
        if (languageValue === 'RUSSIAN') {
            changeLocale('ru');
            setDisabled(true);
        } else if (languageValue === 'АНГЛИЙСКИЙ') {
            changeLocale('en');
            setDisabled(false);
        }
    };

    return (
        <Grid className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                <FormattedMessage id="homeComponent.title" defaultMessage="Default message"/>
            </Typography>
            <Button disabled={!isDisabled} variant="outlined" className={classes.btn} onClick={handleClickBtn}>
                <FormattedMessage id="homeComponent.english" defaultMessage="Default message"/>
            </Button>
            <Button disabled={isDisabled} variant="outlined" className={classes.btn} onClick={handleClickBtn}>
                <FormattedMessage id="homeComponent.russian" defaultMessage="Default message"/>
            </Button>
        </Grid>
    )
};

Header.propTypes = {
    changeLocale: PropTypes.func
};

export default Header;