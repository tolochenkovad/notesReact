import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {FormattedMessage} from "react-intl";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles( theme => ({
    title: {
        fontFamily: '"Permanent Marker", cursive',
        fontSize: theme.spacing(10),
        textAlign: 'center',
        fontWeight: 900,
        color: 'blue',
        margin: theme.spacing(4, 0)
    },
    container: {
        padding : '0 20px'
    },
    btn:{
        marginRight: '20px',
        marginBottom: '20px'
    }
}));

const Header = ({changeLocale}) => {
    const classes = useStyles();

    const [isBtnEn, setBtnEn] = useState(true);
    const [isBtnRu, setBtnRu] = useState(false);

    const handleClickBtn = (language) => {
        changeLocale(language);
        if (language === 'en'){
            setBtnEn(true);
            setBtnRu(false)
        } else {
            setBtnRu(true);
            setBtnEn(false);
        }
    };


    return(
        <Grid className={classes.container}>
            <Typography variant="h1" className={classes.title}>
                <FormattedMessage id="homeComponent.title" defaultMessage="Default message" />
            </Typography>
            <Button disabled={isBtnEn} variant="outlined" className={classes.btn} onClick={ () => handleClickBtn('en') }>
                <FormattedMessage id="homeComponent.english" defaultMessage="Default message" />
            </Button>
            <Button disabled={isBtnRu} variant="outlined" className={classes.btn} onClick={ () => handleClickBtn('ru') }>
                <FormattedMessage id="homeComponent.russian" defaultMessage="Default message" />
            </Button>
        </Grid>
    )
};

Header.propTypes = {
    changeLocale: PropTypes.func
};

export default Header;