import React from 'react';
import { Grid,TextField, List, ListItem, Typography, Button, Link } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

import InputAdornment from '@material-ui/core/InputAdornment';
import useStyles_window from './../utils/style';

const register = () => {
    const classes = useStyles_window();
    return (
      <div>
        <Grid
          className={classes.register_forms}
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
          spacing={3}
        >
          <Grid item xs="12" md="6" lg="8" sm="6">
            <form className={classes.forms} fullWidth>
              <Typography variant="h5">Register</Typography>
              <List>
                <ListItem>
                  <TextField
                    fullWidth
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    variant="outlined"
                    label="Email Required *"
                    defaultName="Enter email"
                    maxwidth="true"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    id="password"
                    fullWidth
                    placeholder="Enter Password"
                    variant="outlined"
                    label="password Required *"
                    type="password"
                    defaultName="Enter Password"
                    maxwidth="true"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    id="password"
                    fullWidth
                    placeholder="Confirm Password"
                    variant="outlined"
                    label="Confirm Required*"
                    type="password"
                    defaultName="Confirm Password"
                    maxwidth="true"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>

                <ListItem>
                  <Typography variant="h5">Registered yet?</Typography>
                  <Link href="#">
                    <Typography variant="h6" className={classes.register_text}>
                      {" "}
                      Login Now{" "}
                    </Typography>
                  </Link>
                </ListItem>
                <ListItem>
                  <Button
                    className={classes.login_Button}
                    fullWidth
                    variant="contained"
                    color="secondary"
                  >
                    Register
                  </Button>
                </ListItem>
                <ListItem></ListItem>
              </List>
            </form>
          </Grid>
        </Grid>
      </div>
    );
};

export default register;