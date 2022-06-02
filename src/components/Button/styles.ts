import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => createStyles({
  buttonStyle: {
    borderRadius: '360px',
    padding: '8px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Mulish',
    fontStyle: "normal",
    lineHeight: 1.25,
    // color: COLORS.white,
    // backgroundColor: COLORS.green,
    '&:hover': {
      // backgroundColor: COLORS.green, 
      // color: COLORS.white,
    },
    '&.MuiButton-root.Mui-disabled': {
      // backgroundColor: COLORS.disableButton,
      // color: theme.mcmColorTheme.accentBlue
      color: 'red'

    },
  },
}));

export default useStyles;
