import React from 'react';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { changeBackgroundColor } from '../../actions';
import { Button, Grid } from '@mui/material';

export default function SmallButtonComponent(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleChangeBgColor = (color) => {
    dispatch(changeBackgroundColor(color));
  };
  return (
    props.buttons &&
    props.buttons.map((btn, index) => (
      <div key={index} className={classes.root}>
        <Grid>
          <Button
            onClick={() => handleChangeBgColor(btn.color)}
            variant={btn.variant}
            // size={btn.size}
            style={{
              color: btn.color,
              border: `2px solid ${btn.color}`,
              fontSize: '20px',
            }}
            className={classes.btn}
          >
            {btn.name}
          </Button>
        </Grid>
      </div>
    ))
  );
}
