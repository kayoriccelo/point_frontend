import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 0px)',
    },
    main: {
        display: 'flex',        
        height: 'calc(100vh - 0px)',
        backgroundColor: '#fafafa'
    }
}));

export default useStyles;