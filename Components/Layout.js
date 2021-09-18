import React from "react";
import Head from "next/head";
import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Container,
  Typography,
  Link,
  CssBaseline,
  Switch,
} from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import useStyles_window from "../utils/style";
import NextLink from "next/link";
import { Store } from "./../utils/Store";
import { useContext } from "react";
const Layout = ({ title, children }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const classes = useStyles_window();
  //const the=createMuiT
  const theme = createTheme({
    typography: {
      useNextVariants: true,
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      palette: {
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: "#f0c004",
        },
        secondary: {
          main: "#208080",
        },
      },
    },
  });

  const darkModeChangeHandaller =()=>{
      dispatch ({type: darkMode ? 'DARK_MODE_OFF':'DARK_MODE_ON'})
    //  console.log("On")
  }
  return (
    <div>
      <Head>
        <title>{title ? `${title}-BigBazar` : `BigBazar`} </title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passhref>
              <Link>
                <Typography className={classes.brandName}>BigBazar</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}> </div>
            <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandaller}></Switch>
              <NextLink className="classes.nav" href="/cart" passhref>
                Cart
              </NextLink>
              <NextLink href="/login" passhref>
                Login
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights are reserved by Nabid bhuia</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
