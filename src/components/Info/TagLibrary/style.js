import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
    headline:{
        textAlign: 'center',
        fontSize: theme.spacing(3.5)
    },
    tagsList:{
        margin: 0,
        padding: 0,
        listStyle: 'none',   
        display: 'flex',
        flexWrap: 'wrap'
    },
    tag:{
        marginRight: theme.spacing(2.5),
        marginTop: theme.spacing(1.875),
        padding: theme.spacing(0.625, 1.25),
        background: '#baa4a4',
        borderRadius: theme.spacing(1.875),
        cursor: 'pointer',
        '&:hover':{
            background: 'white'
        }
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    iconEdit:{
        marginRight: theme.spacing(1.25),
        cursor: 'pointer'
    }   
}));

