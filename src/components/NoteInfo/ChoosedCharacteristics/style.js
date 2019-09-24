import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
    characteristics:{
        background: '#e0d8d8',
        width: '60%'
    },
    tagsBox:{
        margin: 0,
        padding: theme.spacing(2.5),
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    choosedTag:{
        background: '#baa4a4',
        padding: theme.spacing(0.625, 2.5),
        borderRadius: theme.spacing(1.875),
        fontSize: theme.spacing(1.5),
        marginRight: theme.spacing(1.25),
        marginTop: theme.spacing(1.25),
        '& span': {
            marginLeft: theme.spacing(1.25)
        }
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    categoryBox:{
        margin: 0,
        padding: theme.spacing(0, 2.5, 2.5, 2.5),
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    choosedСategory:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(1.5),
        marginTop: theme.spacing(1.25),
        cursor: 'pointer'
    }
}));
