import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    rootTable: {
        overflow: 'auto',
        margin: 2
    },
    card: {
        height: window.innerWidth <= 780 ? `calc(100vh - 220px)` : `calc(90vh - 140px)`,
        minWidth: 450,
        overflowX: 'auto',
        overflowY: 'visible'
    },
    cardNotPagination: {
        height: window.innerWidth <= 780 ? `calc(80vh - 180px)` : `calc(90vh - 150px)`,
        overflowX: 'auto',
        overflowY: 'visible'
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
});

export default useStyles;