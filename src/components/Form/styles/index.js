import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        overflow: 'auto',
    },
    cardContent: {
        height: `calc(90vh - 125px)`,
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 8
    },
    button: {
        margin: 2,
    },
});

export default useStyles;
