import { Grid } from '@mui/material';
import React from 'react';
import LargeButtonComponent from '../components/LargeButton/LargeButtonComponent';
import { useSelector } from 'react-redux';
import SmallButtonComponent from '../components/SmallButtons/SmallButtonComponent';
import SwitchButtonComponent from '../components/SwitchButtonss/SwitchButtonComponent';
import useStyles from './style';
import {
  rectangleButtonList,
  squareButtonList,
  switchButtonList,
} from '../utills/ButtonList';

const HomePage = () => {
  const state = useSelector((state) => state.auth);
  const classes = useStyles({ color: state.newBgColor });
  return (
    <div className={classes.root}>
      <Grid container>
        <p>Hello welcome to the button dashboard</p>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={12}
          className={classes.mainBodyBox}
        >
          <Grid item xs={2} sm={2} lg={2} xl={2} className={classes.btnBox}>
            <p>Click button to change background color</p>
            <Grid item xs={12} sm={12} lg={12} xl={12}>
              <LargeButtonComponent buttons={rectangleButtonList} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              className={classes.sqBtns}
            >
              <SmallButtonComponent buttons={squareButtonList} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              xl={12}
              className={classes.sqBtns}
            >
              <SwitchButtonComponent buttons={switchButtonList} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
