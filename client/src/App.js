import React from "react";
import "./App.styles.js";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import MonochromePhotosIcon from "@material-ui/icons/MonochromePhotos";

import Posts from "./components/posts/posts.component";
import Form from "./components/form/form.component";

import useStyles from "./App.styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <MonochromePhotosIcon className={classes.navLogo} />
        <Typography className={classes.heading} variant="h2" align="center">
          iMemories
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
