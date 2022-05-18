// import COLORS from '../../config/colors';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  calendarMainContainer:{
    display: 'flex',
    flexDirection: 'row',
    height: '50px',
    alignItems: 'center',
    border: '1px solid #D5D5D5',
    // backgroundColor: COLORS.white,
  },
  calendarDateStyle: {
    margin: '0px 15px',
    // color: COLORS.textGrey,
    fontSize: 22,
  },
  calendarIconContainer: {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid #D5D5D5',
  },
  calendarIconStyle: {
    margin: '14px'
  },
  calendarContainer:{
    position: 'absolute',
    top: 55,
    right: 0,
    zIndex: 500,
  }
}));

export default useStyles;
