import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '98vh',
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default useStyles;