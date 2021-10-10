import { FormControlLabel, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackgroundColor } from '../../actions';
import useStyles from './style';

const SwitchButtonComponent = (props) => {
  const [newbuttons, setNewbuttons] = useState(props.buttons);
  const state = useSelector((state) => state.auth);
  const classes = useStyles({ color: state.newBgColor });
  const dispatch = useDispatch();

  const handleChangeBgColor = (color, btnId) => {
    updateCheckedState(btnId);
    // setNewbuttons(updateCheckedState(btnId));
    dispatch(changeBackgroundColor(color));
  };

  const updateCheckedState = (btnId) => {
    const checked = props.buttons.map((btn) => {
      if (btn.id === btnId && btn.checked === false) {
        return { ...btn, checked: true };
      } else if (btn.id === btnId && btn.checked === true) {
        return { ...btn, checked: false };
      } else {
        return { ...btn, checked: true };
      }
    });
    return checked;
  };

  return (
    newbuttons &&
    newbuttons.map((btn, index) => (
      <div className={classes.root} key={index}>
        <FormControlLabel
          value={btn.checked ? 'Yes' : 'No'}
          control={
            <Switch
              style={{
                color: btn.checked ? 'white' : `${btn.color}`,
              }}
              checked={btn.checked}
            />
          }
          label={btn.checked ? 'Yes' : 'No'}
          labelPlacement={btn.checked ? 'start' : 'end'}
          onChange={() => handleChangeBgColor(btn.color, btn.id)}
          className={classes.switchBtn}
          style={{ background: `${btn.color}` }}
        />
      </div>
    ))
  );
};

export default SwitchButtonComponent;
