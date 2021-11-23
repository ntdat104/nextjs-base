import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogWrapper from 'components/DialogWrapper/DialogWrapper';
import DialogTitleDefault from 'components/DialogTitleDefault/DialogTitleDefault';

type Scroll = 'paper' | 'body';

export default function TestUI() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<any>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Open
      </Button>
      <DialogWrapper
        onClose={handleClose}
        open={open}
        scroll={'paper'}
        maxWidth="md"
      >
        <DialogTitleDefault title={'Tùy chỉnh'} onClose={handleClose} />
      </DialogWrapper>
    </>
  );
}
