import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: 'orange',
  },
  mainBodyBox: (newColor) => ({
    backgroundColor: newColor.color ? newColor.color : 'white',
    border: '1px solid red',
    minHeight: '92.8vh',
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  btnBox: {
    border: '4px dashed orange',
    backgroundColor: 'transparent',
  },
  sqBtns: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
