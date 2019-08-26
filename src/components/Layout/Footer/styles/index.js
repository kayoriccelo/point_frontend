import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: '#24292e',
    },
    textSecondary: {
        color: 'white'
    }
}));

export default useStyles;
