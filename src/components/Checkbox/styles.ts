import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  checkboxContainer: {
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '360px',
    border: '1px solid #89B3D0',
  },
}));

export default useStyles;
