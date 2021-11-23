import React from 'react';
import { useStyles } from './styles';

interface Props {
  children?: any;
  styleCustom?: any;
  classCustom?: any;
}

const DialogTitleWrapper = (props: Props) => {
  const { children, styleCustom, classCustom } = props;
  const classes = useStyles();
  return (
    <>
      <div
        style={styleCustom}
        className={`${classes.wrapperDialogTitle} ${classCustom}`}
      >
        {children}
      </div>
    </>
  );
};

export default DialogTitleWrapper;
