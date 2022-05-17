import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


export interface IStyleProps {
  selected?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linearProgressBarContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.mcmColorTheme.frosteeGreen,
      width: "295px",
      height: "12px",
      borderRadius: "64px",
    },
    linearProgressBarInsideLineStyle: {
      backgroundColor: theme.mcmColorTheme.mantisGreen,
      width: "50%",
      height: "inherit",
      borderRadius: "64px",
    },
  })
);

export default useStyles;
