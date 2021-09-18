import { Button, FormControl, FormControlLabel, FormLabel, Grid, List, ListItem, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import React from 'react';

const payment = () => {
    return (
      <div>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid fullWidth container justifyContent="center" item md="6" lg="8" xs="12" sm="12">
            <List>
              <ListItem>
                <FormControl
                  fullWidth
                  alignItems="center"
                  justifyContent="center"
                  component="fieldset"
                >
                    
                  <FormLabel component="h4" variant="h1">
                    <Typography variant="h4">Add Payment Method</Typography>
                  </FormLabel>
                  <RadioGroup
                    aria-label="Payment"
                    defaultValue="cash"
                    name="radio-group"
                  >
                    <FormControlLabel
                      value="bkash"
                      control={<Radio />}
                      label="bkash"
                    />
                    <FormControlLabel
                      value="Nagad"
                      control={<Radio />}
                      label="Nagad"
                    />
                    <FormControlLabel
                      value="Rocket"
                      control={<Radio />}
                      label="Rocket"
                    />
                    <FormControlLabel
                      value="Cash"
                      control={<Radio />}
                      label="Cash"
                    />
                    <FormControlLabel
                      value="Visa"
                      control={<Radio />}
                      label="Visa"
                    />
                  </RadioGroup>
                </FormControl>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="secondary">
                  Continue
                </Button>
                
              </ListItem>
              <ListItem>
              <Button fullWidth variant="contained" color="">
                  Back
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
};

export default payment;