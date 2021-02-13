import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2vh",
  },
}));

function BasicContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">{props.children}</Container>
    </div>
  );
}

export default BasicContainer;
