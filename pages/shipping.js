import { Button, Grid, InputAdornment, List, ListItem, TextField, Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../Components/Layout';
import useStyles_window from './../utils/style';

const shipping = () => {

    const classes =useStyles_window();
    return (
      <div>
       <Layout>
       <Grid container spacing={3} alignItems="center" justifyContent="center" className={classes.shipping_forms} >
          <Grid item xs="12" md="6" lg="8" sm="6" >
            <Typography spacing={3} variant="h5">
              Shipping Address
            </Typography>
            <form>
              <List>
                <ListItem>
                  <TextField
                    fullWidth
                    id="name"
                    type="text"
                    placeholder="Enter Name"
                    defaultName="Enter Name"
                    variant="outlined"
                    label="Name required*"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    fullWidth
                    id="address"
                    type="text"
                    placeholder="Enter Address"
                    defaultName="Enter Address"
                    variant="outlined"
                    label="Address required*"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    fullWidth
                    id="City"
                    type="text"
                    placeholder="Enter City"
                    defaultName="Enter City"
                    variant="outlined"
                    label="City required*"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    fullWidth
                    id="postalcode"
                    type="text"
                    placeholder="Enter Postal Code"
                    defaultName="Enter Postal Code"
                    variant="outlined"
                    label="Postal Code required*"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <TextField
                    fullWidth
                    id="country"
                    type="text"
                    placeholder="Enter country"
                    defaultName="Enter country"
                    variant="outlined"
                    label="Country required*"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"></InputAdornment>
                      ),
                    }}
                  ></TextField>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    Continue
                  </Button>
                </ListItem>
              </List>
            </form>
          </Grid>
        </Grid>
       </Layout>
      </div>
    );
};

export default shipping;