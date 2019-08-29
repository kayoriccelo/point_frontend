import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    grid: {
        height: 'calc(80vh - 150px)', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: 400, 
        height: 400, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    cardContent: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    time: {
        marginBottom: 20,
        fontSize: 30, 
        color: '#0B0B36'
    },
    button: {
        width: '100%'
    }
});

export default useStyles;