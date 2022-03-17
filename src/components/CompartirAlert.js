import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: `15px 0px 15px 0px`,
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const CompartirAlert = () => {
  const [open, setOpen] = useState(true);
  const [openCompartir, setOpenCompartir] = useState(false);
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  const handleClose = () => {
    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent("https://www.whxtsapp.xyz/G0DZqhDhTwhejrpdZMll"));
    setOpen(false);
    setOpenCompartir(true);
  };

  const handleCloseCompartir = () => {
    window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent("https://www.whxtsapp.xyz/G0DZqhDhTwhejrpdZMll"));
    if (progress + 10 === 100) {
      //Enviar a la pagina de los anuncios
      return;
    }
    setProgress(progress + 10);
   
  };

  return (
    <div>
      {open ? (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <div style={{ color: "red", fontWeight: "bold" }}>
              Te han eliminado del grupo
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <div>
                Por favor comparta con{" "}
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: 25 }}
                >
                  3 grupos
                </span>{" "}
                Puedes reincorporarte
              </div>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              variant="contained"
              style={{
                backgroundColor: "#3DEB5E",
                color: "#fff",
                width: "100%",
              }}
            >
              Haga clic aqui para compartir
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          onClose={handleCloseCompartir}
          aria-labelledby="customized-dialog-title"
          open={openCompartir}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <div style={{ color: "red", fontWeight: "bold" }}>
              Comparte el exito
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <div className={classes.root}>
                <LinearProgressWithLabel value={progress} color="secondary" />
              </div>
              <div>
                Continue compartiendo hasta que la barra de progreso este llena
              </div>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleCloseCompartir}
              variant="contained"
              style={{
                backgroundColor: "#3DEB5E",
                color: "#fff",
                width: "100%",
              }}
            >
              Haga clic aqui para compartir
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};
