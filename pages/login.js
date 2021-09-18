import React from 'react';
import { Grid,TextField, List, ListItem, Typography, Button, Link } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

import InputAdornment from '@material-ui/core/InputAdornment';
import useStyles_window from './../utils/style';

const login = () => {

  const classes = useStyles_window();

    return (
      <div className={classes.edit_text_items}>
       
           
           <Grid container alignItems="center" justifyContent="center" direction="row" spacing={3} >
                <Grid item xs="12" md="6">
                  
                  <form className={classes.forms} fullWidth >
                  <Typography variant="h5">Login</Typography>
                  <List>
                    <ListItem>
                      <TextField
                        fullWidth
                        id='email'
                        type ='email'
                        placeholder="Enter email"
                        variant="outlined"
                        label="Email Required"
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
                        id='password'
                        fullWidth
                        placeholder="Enter Password"
                        variant="outlined"
                        label="Password Required"
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
                      <Typography variant="h5">Not registered yet?</Typography>
                      <Link href="/register">
                        <Typography
                          variant="h6"
                          className={classes.register_text}
                        >
                          {" "}
                          Register Now{" "}
                        </Typography>
                      </Link>
                    </ListItem>

                    <ListItem>
                      <Button className={classes.login_Button} fullWidth variant="contained" color="secondary">
                        Log In
                      </Button>
                    </ListItem>
                    <ListItem>
                     
                    </ListItem>
                  </List>
                  </form>
                  </Grid>
               
             </Grid>
        
     
      </div>
    );
};

export default login;