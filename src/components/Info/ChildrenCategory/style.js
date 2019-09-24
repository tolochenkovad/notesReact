import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
    childBox:{
        marginBottom: theme.spacing(1.25),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    childWrap:{
        display: 'flex'
    },
    category:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        fontSize: theme.spacing(1.5),
        margin: theme.spacing(0, 2.5),
        position: 'relative',
        marginBottom: theme.spacing(1.25),
        '&:before':{
            content: '=>',
            color: 'black',
            position: 'absolute',
            left: 0,
            bottom: 0,
            transform: 'translate(-30px)'
        },
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