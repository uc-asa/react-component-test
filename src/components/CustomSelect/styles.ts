// import COLORS from '../../config/colors';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customSelectContainer: {
    position: 'relative',
  },
  customSelectStyle: {
    boxShadow: `0px 0px 6px #5592D8`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '250px',
    height: '50px',
    padding: '0px 10px',
  },
  menuSelectStyle: {
    position: 'absolute',
    border: '1px solid #E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '250px',
    minHeight: '50px',
    backgroundColor: 'white',
    zIndex: 100,
    marginTop: '2px'
  },
  menuSelectItemStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '250px',
    minHeight: '50px',
    padding: '0px 10px',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#D7E8FD',
    },
  },
}));

export default useStyles;
