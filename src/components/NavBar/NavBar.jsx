import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  const renderLoginButton = (isLogin) => {
    if (isLogin) {
      return (
        <IconButton edge="end" color="inherit" aria-label="account">
          <AccountCircle />
        </IconButton>
      );
    } else {
      return <Button color="inherit">Login</Button>;
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              props.onMenuClickHandler(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <IconButton color="inherit">
              <SportsSoccerIcon />
              {"-Krida"}
            </IconButton>
          </Typography>
          {renderLoginButton(false)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
