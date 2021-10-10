import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    margin: '15px',
  },
  switchBtn: (newColor) => ({
    backgroundColor: newColor.color ? newColor.color : 'white',
    border: '1px solid black',
    borderRadius: '50px',
    minWidth: '150px',
    minHeight: '50px',
  }),
}));
