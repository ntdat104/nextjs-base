import React from 'react';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import DialogTitleWrapper from '../DialogTitleWrapper/DialogTitleWrapper';

interface Props {
  title?: any;
  styleCustom?: any;
  classCustom?: any;
  onClose?: any;
  children?: any;
}

const DialogTitleDefault = (props: Props) => {
  const { styleCustom, classCustom, title, onClose, children } = props;
  return (
    <DialogTitleWrapper classCustom={classCustom} styleCustom={styleCustom}>
      <div className={'title'}>{children ? children : title}</div>
      <IconButton
        className={'close-button'}
        aria-label="close"
        onClick={onClose}
      >
        <Close />
      </IconButton>
    </DialogTitleWrapper>
  );
};
export default DialogTitleDefault;
