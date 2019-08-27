import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    rootTable: {
        maxHeight: 800,
        overflow: 'auto',
        margin: 2
    },
    tableCell: {
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: 'italic',
        color: 'black'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    card: {
        maxHeight: 'calc(82vh - 120px)',
        overflowX: 'auto',
        overflowY: 'visible'
    }
});

export default useStyles;