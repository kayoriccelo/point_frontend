import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '92%',
        width: '92%',
        overflow: 'auto',
        padding: '2%',
    },
    card: {
        height: 'calc(90vh - 120px)',
        width: '100%',
        
   },
   appBarSpacer: theme.mixins.toolbar,
}));

export default useStyles;