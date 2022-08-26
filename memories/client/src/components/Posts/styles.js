import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({ // removed `theme` from ()
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    smMargin: {
      margin: 'auto', // changed from margin: theme.spacing(1)
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));