import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const useStyles = makeStyles({
    filter:{
        marginBottom: theme.spacing(3.75),
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    search:{
        padding: theme.spacing(1.25),
        width: '100%'
    },
    tag: {
        fontSize: theme.spacing(1.5),
        padding: theme.spacing(0.625, 1.875),
        background: '#978989a1',
        borderRadius: theme.spacing(1.875),   
        marginRight: theme.spacing(2.5)
    },
    iconDel:{
        marginLeft: theme.spacing(1.25),
        cursor: 'pointer'
    },
    text:{
        fontSize: theme.spacing(1.5),
        padding: theme.spacing(0.625, 1.875),
        background: '#978989a1',
        borderRadius: theme.spacing(1.875),   
        marginRight: theme.spacing(2.5)
    }
});