import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import useStyles from "./styles";
import { Button } from "@material-ui/core";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

export interface CustomCalendarProps {
  title?: string;
}

const CustomCalendar = ({ title, ...props }: CustomCalendarProps) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [date, setDate] = useState(moment().format("DD/MM/YYYY"));
  const calRef = useRef<HTMLDivElement>(null);

  const onChangeDate = (value: Event) => {
    // setDate(moment(value).format("DD/MM/YYYY"));
    setOpenModal(false);
  };

  const handleClickOutside = (event: any) => {
    if (calRef.current && !calRef.current?.contains(event.target)) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event)
    );

    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event)
      );
    };
  });

  const onOpenCalendar = () => {
    setOpenModal(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        className={classes.calendarMainContainer}
        onClick={() => onOpenCalendar()}
      >
        <Typography className={classes.calendarDateStyle}>{date}</Typography>
        <div className={classes.calendarIconContainer}>
          <img
            // src={IMAGES.CALENDAR.default}
            alt="cross_icon"
            className={classes.calendarIconStyle}
          />
        </div>
      </Button>

      {openModal && (
        <div className={classes.calendarContainer} ref={calRef}>
          <Calendar
            minDate={new Date()}
            onChange={(value:any) => onChangeDate(value)}
          />
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
