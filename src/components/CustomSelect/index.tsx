import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
// import IMAGES from "../../config/images";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import ArrowDownIcon from "../../Icons/ArrowDown";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export interface CustomSelectProps {
  value?: string;
  itemData?: any;
  containerStyle?: string;
  selectedValue?: any;
}

function CustomSelect({
  value = "",
  itemData,
  containerStyle,
  selectedValue,
  ...props
}: CustomSelectProps) {
  const classes = useStyles();
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const onSelectOption = (item: any) => {
    setSelectedOption(item);
    setMenuVisibility(false);
    selectedValue(item);
  };

  return (
    <div
      className={`${classes.customSelectContainer} ${containerStyle}`}
      {...props}
    >
      <Button
        className={classes.customSelectStyle}
        onClick={() => {
          setMenuVisibility(!isMenuVisible);
        }}
      >
        <Typography style={{ textTransform: "capitalize" }}>
          {selectedOption === "" ? "Select any option" : selectedOption}
        </Typography>
        <ArrowDownIcon />
      </Button>

      {isMenuVisible && (
        <div className={classes.menuSelectStyle}>
          {itemData?.map((item: any, index: any) => (
            <Button
              className={classes.menuSelectItemStyle}
              key={index}
              onClick={() => {
                onSelectOption(item);
              }}
            >
              <Typography style={{ textTransform: "capitalize" }}>
                {item}
              </Typography>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
