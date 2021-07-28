import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
  },

  tableHeaderCell: {
    color: '#fff',
    fontSize: '1.2rem',
  },
}));

export default styles;
