import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
    headline:{
        '&&':{
            textAlign: 'center',
            fontSize: theme.spacing(3.5),
            margin: theme.spacing(4.5, 0),
            fontWeight: 700
        }  
    },
    categoryList:{
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    item:{
        '&&':{
            marginBottom: theme.spacing(4),
            padding: 0,
            display: 'flex',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            cursor: 'pointer'
        }   
    },
    category:{
        '&&':{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(0.625, 1.25),
            border: '1px solid black',
            marginRight: theme.spacing(2.5),
            fontSize: theme.spacing(1.5),
            '&:hover':{
                background: 'white'
            }
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