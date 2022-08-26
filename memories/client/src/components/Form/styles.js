import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({ // removed `theme` from ()
    root: {
      '& .MuiTextField-root': {
        margin: 'auto', // changed from margin: theme.spacing(1)
      },
    },
    paper: {
      padding: '10 px', // changed from margin: theme.spacing(2)
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  }));