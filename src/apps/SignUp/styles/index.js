import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        height: '100%', 
        width: "100%", 
        top: 0, 
        left: 0, 
        position: "absolute", 
        backgroundColor: '#24292e'
    },
    card: {
        width: 380,
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        width: '90%'
    }
});

export default useStyles;
