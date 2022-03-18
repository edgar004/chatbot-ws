import React, { useContext, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";

import imgws from "../img1/ws.png";
import { Box } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import AppContext from "../auth/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  icon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  btn: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [isRedirect, setIsRedirect] = useState(false);
  const [data, setData] = useState({ nombre: "", img: "" });
  const {
    state: { userData },
  } = useContext(AppContext);

  const { nombre, img } = data;

  useEffect(() => {

    if (userData) {
      setData(userData);
    }

  }, [userData]);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#00A884" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Avatar alt="" src={imgws} className={classes.icon} />
            </IconButton>
            <Typography
              className={classes.title}
              style={{ fontWeight: "bold", fontSize: 15, fontFamily: "Arial" }}
            >
              WhatsApp Group Invite
            </Typography>
            <MenuIcon />
          </Toolbar>
        </AppBar>
      </div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <div style={{ paddingTop: 7 }}>
          <div>
            <Avatar alt="" src={img} className={classes.avatar} />
          </div>
        </div>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 15 }}
      >
        <Typography style={{ fontSize: 20, fontFamily: "Arial" }}>
          {nombre}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 5, fontSize: 15, fontFamily: "Arial" }}
      >
        <Typography variant="">WhatsApp Group Invite</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 15 }}
      >
        <div className={classes.btn}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3DEB5E",
              color: "#fff",
              fontWeight: "bold",
            }}
            onClick={() => setIsRedirect(true)}
          >
            JOIN CHAT
          </Button>
        </div>
      </Box>
      <div style={{ padding: 20 }}>
        <hr />
      </div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: 3 }}
      >
        <Typography style={{ fontFamily: "Arial" }}>
          Do not have WhatsApp yet?
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography style={{ fontFamily: "Arial", color: "#8BDEFD" }}>
          WhatsApp
        </Typography>
      </Box>
      {isRedirect && <Redirect to="/chat" />}
    </div>
  );
};

export default HomePage;
