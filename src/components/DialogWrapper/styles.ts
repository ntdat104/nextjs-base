// Global Imports
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    wrapperDialog: {
      '& .MuiDialog-paper': {
        fontWeight: 400,
        color: '#050505',
        fontSize: 14,
        fontFamily: 'Roboto',
        borderRadius: 10,
        width: 676,
        '&.MuiDialog-paperFullScreen': {
          borderRadius: 0,
        },
        '& .MuiDialogContent-root': {
          marginRight: 20,
          marginLeft: 20,
          padding: '10px 15px',
          overflowY: 'auto',
          '&::-webkit-scrollbar-track': {
            // "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
            // borderRadius: "10px",
            backgroundColor: '#E4E6EB',
          },
          '&::-webkit-scrollbar': {
            width: '4px',
            // backgroundColor: "#F5F5F5",
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            // "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
            backgroundColor: '#3A3B3C',
          },
          '@media (max-width: 767px)': {
            marginRight: 0,
            marginLeft: 0,
          },
        },
        '& .MuiDialogContent-dividers': {
          borderBottom: 'none',
        },
      },
      '& .MuiDialog-paperWidthLg': {
        width: 750,
      },
      '& .MuiDialog-paperWidthXl': {
        width: 940,
      },
      '& .MuiDialog-paperWidthMd': {
        width: 676,
      },
      '& .MuiDialog-paperWidthSm': {
        width: 436,
      },
      '& .MuiDialogActions-root': {
        borderTop: '1px solid #E4E6EB',
        paddingTop: 20,
        paddingBottom: 25,
        marginLeft: 20,
        marginRight: 20,
        '@media (max-width: 767px)': {
          marginRight: 0,
          marginLeft: 0,
          padding: 20,
        },
      },
    },
    wrapperDialogMobile: {},
  })
);
