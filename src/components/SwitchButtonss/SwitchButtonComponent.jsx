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

  const handleChangeBgColor = (e, btnId) => {
    const { checked } = e.target;
    let color;
    const newBtns = [...newbuttons].map((b) => {
      if (checked && b.id === btnId) {
        color = b.color;
      } else if (b.id !== btnId && !color && b.checked) {
        color = b.color;
      }
      if (b.id === btnId) {
        b.checked = checked;
      }
      return b;
    });
    dispatch(changeBackgroundColor(color ?? 'white'));
    setNewbuttons(newBtns);
  };

  return (
    newbuttons &&
    newbuttons.map((btn, index) => {
      btn.checked = btn.checked ?? false;
      if (index === 0) console.log(btn);
      return (
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
            onChange={(e) => handleChangeBgColor(e, btn.id)}
            className={classes.switchBtn}
            style={{ background: `${btn.color}` }}
          />
        </div>
      );
    })
  );
};

export default SwitchButtonComponent;
