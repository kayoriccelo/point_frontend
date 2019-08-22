import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    content: {
        height: '100vh',
        overflow: 'auto',
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        height: '88vh',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default useStyles;