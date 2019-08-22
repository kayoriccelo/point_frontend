import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        height: '100%', 
        width: "100%", 
        top: 0, 
        left: 0, 
        position: "absolute", 
        backgroundColor: 'rgba(0, 0, 0, 0.87)'
    },
    card: {
        width: 380,
        height: 380,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    input: {
        marginBottom: 20,
        width: '70%'
    },
    button: {
        width: '70%'
    }
});

export default useStyles;
