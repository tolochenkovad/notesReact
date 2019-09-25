import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles( theme => ({
     '&&':{
          input:{
               background:'transparent',
               border: 'none', 
               outline: 'none',
               fontSize: theme.spacing(0.5)
          }
     }
 }));