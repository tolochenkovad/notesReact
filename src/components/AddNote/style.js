import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();
export const useStyles = makeStyles({
    addNote: {
        position: 'relative',
        borderBottom: '1px solid #ededed'
    },
    textarea:{
        fontFamily: '"Montserrat", sans-serif',
        fontSize: theme.spacing(2.5),
        padding: 0,
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(6.25),
        border: 'none',
        background: '#ececec',
        width: '100%',
        boxSizing: 'border-box',
        fontStyle: 'italic',
        boxShadow: 'inset 0 -2px 40px rgba(0, 0, 0, 0.03)',
        resize: 'none',
        color: 'transparent',
        textShadow: '0 0 0 black',
        cursor: 'pointer',
        "&:focus": {
            outline: 'none'
          }
    },
    icon:{
        position: 'absolute',
        fontSize: theme.spacing(3),
        top: theme.spacing(3.75),
        transform: 'translateY(-50%)',
        left: theme.spacing(2.5)
    }
});