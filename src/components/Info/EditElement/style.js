import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const useStyles = makeStyles({
    input:{
         background:'transparent',
         border: 'none', 
         outline: 'none',
         fontSize: theme.spacing(2)
    }
 });