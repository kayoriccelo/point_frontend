import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    rootTable: {
        maxHeight: 800, 
        overflow: 'auto',
        margin: 2
    },
    tableRow: {
        backgroundColor: '#24292e',
    },
    tableCell: {
        color: 'white',
        fontWeight: 'bold'
    },
});

export default useStyles;