import React from 'react';
import { useStyles } from './styles';
import { Dialog, Fade, Slide } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { TransitionProps } from '@mui/material/transitions';

export enum DialogType {
  CONFIRM = 'confirm',
}
interface Props {
  children?: any;
  open?: any;
  onClose?: any;
  fullScreen?: boolean;
  styleCustom?: any;
  classCustom?: any;
  zIndex?: any;
  classCustomMobile?: any;
  maxWidth?: any;
  disableBackdropClick?: boolean;
  scroll?: any;
  type?: 'confirm' | 'normal';
  transaction?: 'slide' | 'fade';
}

const TransitionSlide = React.forwardRef(function Transition(
  props: TransitionProps & { children: any },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TransitionFade = React.forwardRef(function Transition(
  props: TransitionProps & { children: any },
  ref: React.Ref<unknown>
) {
  return <Fade in={true} ref={ref} {...props} />;
});

const DialogWrapper = (props: Props) => {
  const {
    children,
    open,
    onClose,
    styleCustom,
    classCustom,
    zIndex,
    maxWidth,
    scroll,
    fullScreen,
    type,
    transaction,
  } = props;
  const classes = useStyles();
  const isMobileDevice = isMobile;

  const transactionFinal =
    isMobileDevice && transaction !== 'fade' ? TransitionSlide : TransitionFade;
  return (
    <>
      <Dialog
        style={styleCustom}
        TransitionComponent={transactionFinal}
        open={open}
        className={`${classes.wrapperDialog} ${classCustom} ${
          isMobileDevice && classes.wrapperDialogMobile
        }  ${zIndex ? 'zIndex' : ''}`}
        onClose={onClose}
        fullScreen={
          isMobileDevice && type !== DialogType.CONFIRM ? true : fullScreen
        }
        scroll={scroll}
        maxWidth={maxWidth}
      >
        {children}
      </Dialog>
    </>
  );
};

export default DialogWrapper;
