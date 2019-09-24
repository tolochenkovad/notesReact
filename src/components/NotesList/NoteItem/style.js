import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        fontSize: theme.spacing(3),
        background: 'orange',
        minHeight: theme.spacing(15),
        padding: theme.spacing(1.25, 3.75, 1.25, 3.75),
        justifyContent: 'space-between'     
    },
    text:{
        fontFamily: '"Montserrat", sans-serif',
        fontSize: theme.spacing(2.5),
        wordWrap: 'break-word'
    },
    box:{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(3.75),
        marginBottom: theme.spacing(1.25)
    },
    toolsList:{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 0,
        padding: 0,
        listStyle: 'none'
    },
    tag:{
        fontSize: '12px',
        marginRight: '5px',
        marginTop: '10px',
        padding: '5px 15px',
        background: '#baa4a4',
        borderRadius: '15px',
        cursor: 'pointer',
        '&:last-child':{
            marginRight: 0
        },
        '& span':{
            marginLeft: '10px'
        }
    },
    icons:{
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        marginLeft: theme.spacing(6.25),
        cursor: 'pointer'
    },
    categoryText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(0.625, 1.25),
        border: '1px solid black',
        marginRight: theme.spacing(2.5),
        fontSize: theme.spacing(1.5),
        marginTop: theme.spacing(1.25),
        cursor: 'pointer'
    },
    dateBox:{
        textAlign: 'right',
        marginTop: theme.spacing(2.5),
        fontSize: theme.spacing(1.5)
    },
    date:{
        marginRight: theme.spacing(1.25),
        '&:last-child':{
            marginRight: 0
        }
    }
}));