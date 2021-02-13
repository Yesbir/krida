import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { v4 as uuidv4 } from "uuid";

const drawerWidth = 300;

const useStyles = makeStyles({
  list: {
    width: drawerWidth,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
});

export default function SideBar(props) {
  const classes = useStyles();

  const onDrawerCloseHandler = () => {
    props.setOpen(false);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={onDrawerCloseHandler}
      onKeyDown={onDrawerCloseHandler}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment key={uuidv4()}>
        <Drawer
          className={classes.drawer}
          anchor="left"
          open={props.open}
          onClose={onDrawerCloseHandler}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
