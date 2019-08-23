import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        marginBottom: 10,
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default useStyles;