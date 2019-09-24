import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
    noteInfo:{
        position: 'relative',
        width: '60%'
    },
    textarea:{
        position: 'relative',
        padding: theme.spacing(2.5),
        border: 'none',
        background: '#b4b4fa',
        width: '100%',
        height: theme.spacing(37.5),
        boxSizing: 'border-box',
        fontSize: theme.spacing(3.5),
        boxShadow: 'inset 0 -2px 40px rgba(0,0,0,0.03)',
        resize: 'none',
        outline: 'none'
    },
    infoList:{
        margin: 0,
        listStyle: 'none',
        padding: 0,
        paddingTop: theme.spacing(1.25),
        background: '#e0d8d8',
        display: 'flex',
        alignItems: 'flex-end'  
    },
    tagWrap:{
        cursor: 'pointer',
        position: 'relative',    
        margin: theme.spacing(0, 2.5)
    },
    tag:{
        width: theme.spacing(13.75),
        height: theme.spacing(3.75),
        background: '#baa4a4',
        borderRadius: theme.spacing(1.875),
        fontSize: theme.spacing(2.5)
    },
    icon:{
        fontSize: theme.spacing(2.5),
        position: 'absolute',
        top: '15%',
        left: '15%',
        '& span':{
            marginLeft: theme.spacing(1.25),
        }
    },
    colorWrap:{
        cursor: 'pointer',
        position: 'relative',
        marginRight: theme.spacing(2.5)
    },
    color:{
        width: theme.spacing(13.75),
        height: theme.spacing(3.75),
        background: 'yellow',
        fontSize: theme.spacing(2.5)
    },
    categoryWrap:{
        cursor: 'pointer',
        position: 'relative'
    },
    category:{
        width: theme.spacing(14.375),
        height: theme.spacing(3.75),
        border: '1px solid black'
    },
    categoryIcon:{
        fontSize: theme.spacing(2.5),
        position: 'absolute',
        top: '15%',
        left: '7%',
        '& span':{
            marginLeft: theme.spacing(1.25),
        }
    },
    select:{
        background: '#978989',
        width: theme.spacing(52.5),
        height: theme.spacing(6.25),
        border: 'none',
        position: 'absolute',
        bottom: '-2.3%',
        left: 0,
        outline: 'none',
        paddingLeft: theme.spacing(3.75),
        fontSize: theme.spacing(2.5),
        zIndex: 11
    },
    formBox:{
        position: 'absolute',
        bottom: '-4%'  
    },
    input:{
        height: theme.spacing(6.25),
        left: '40%',
        width: theme.spacing(56.25),
        outline: 'none',
        fontSize: theme.spacing(2.5),
        paddingLeft: theme.spacing(3.75)
    },
    btn:{
        display: 'none'
    }
 }));