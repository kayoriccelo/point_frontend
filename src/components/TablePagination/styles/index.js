import { makeStyles } from '@material-ui/core/styles';

export const useStylesActions = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2),
    },
}));
