import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeBackgroundColor } from '../../actions';
import useStyles from './style';

const LargeButtonComponent = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChangeBgColor = (color) => {
    dispatch(changeBackgroundColor(color));
  };
  return (
    props.buttons &&
    props.buttons.map((btn, index) => (
      <div key={index} className={classes.root}>
        <Stack direction="column" spacing={2}>
          <Button
            onClick={() => handleChangeBgColor(btn.color)}
            variant={btn.variant}
            size={btn.size}
            style={{
              color: btn.color,
              border: `2px solid ${btn.color}`,
              font: '20px',
            }}
            className={classes.btn}
          >
            {btn.name}
          </Button>
        </Stack>
      </div>
    ))
  );
};

export default LargeButtonComponent;
