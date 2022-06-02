import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textBoxStyle:{
      fontFamily: 'Mulish',
      fontStyle: 'normal',
      lineHeight: 1.25,
    }
  }),
);

export default useStyles;
