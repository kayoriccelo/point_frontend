import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        height: '100%',
        width: '100%',
        margin: theme.spacing(2),
        overflowX: 'auto', 
        overflowY: 'visible',
    },
    content: {
        padding: 4,
    },
    appBarSpacer: theme.mixins.toolbar,
}));

export default useStyles;