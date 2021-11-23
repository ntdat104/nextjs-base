// Global Imports
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    wrapperDialogTitle: {
      padding: '15px 20px 10px',
      fontFamily: 'Roboto',
      display: 'flex',
      alignItems: 'center',
      flex: '1 0 auto',
      maxHeight: 48,
      '& .title': {
        fontSize: 18,
        display: 'block',
        width: '100%',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        '@media (max-width: 767px)': {
          fontSize: 16,
        },
      },
      '& .close-button': {
        padding: 0,
        '& .MuiSvgIcon-root': {
          fontSize: 28,
          '@media (max-width: 767px)': {
            fontSize: 26,
            marginLeft: 15,
          },
        },
      },
    },
  })
);
