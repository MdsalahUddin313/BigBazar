import { Button, Card, CardActions, Grid, List, ListItem, Table, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../Components/Layout';
import useStyles_window from './../utils/style';


const placeorder = () => {
    const classes=useStyles_window();
    return (
      <Layout>
          <div container>
        <Grid container>
          <Grid
            item
            alignItems="left"
            justifyContent="left"
            fullWidth
            md="9"
            xs="12"
          >
            <List>
              <ListItem>
                <Typography component="h4" variant="h4">
                  Place Order
                </Typography>
              </ListItem>
              <ListItem>
                <Card
                  className={classes.PlaceOrder_ShippingAddress_card}
                  fullWidth
                >
                  <CardActions>
                    <List>
                      <ListItem fullWidth>
                        <Typography fullWidth variant="h6" component="h1">
                          Shipping Address
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography fullWidth variant="subtitle">
                          Vlock -C,Mohammadpur,Dhaka.
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </ListItem>
              <ListItem>
                <Card className={classes.PlaceOrder_ShippingAddress_card}>
                  <CardActions>
                    <List>
                      <ListItem fullWidth>
                        <Typography fullWidth variant="h6" component="h1">
                          Payment method
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography fullWidth variant="subtitle">
                          Rocket
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </ListItem>

              <ListItem>
                <Card className={classes.PlaceOrder_ShippingAddress_card}>
                  <CardActions>
                    <List>
                      <ListItem fullWidth>
                        <Typography fullWidth variant="h6" component="h1">
                          Order Items
                        </Typography>
                      </ListItem>
                      <ListItem>
                         <TableContainer>
                             <Table container>
                                 <TableRow fullWidth>
                                 <TableCell align="left">Product Image</TableCell>
                                 <TableCell align="right">Product Name</TableCell>
                                 <TableCell align="right">Product Quantity</TableCell>                                 
                                 </TableRow>
                                 <TableRow fullWidth>
                                 <TableCell align="left">Image fsht</TableCell>
                                 <TableCell align="right">Fit shirt</TableCell>
                                 <TableCell align="right">5</TableCell>                                 
                                 </TableRow>
                             </Table>
                         </TableContainer>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </ListItem>

            </List>
          </Grid>
          <Grid item md="3" xs="12">
              <Typography className={classes.order_summary} variant="h5">Order Summary</Typography>
            <Card>
                <CardActions>
                <TableContainer variant="outlined" >
              <Table>
                  <TableRow>
                  <TableCell align="left">Items</TableCell>
                  <TableCell align="left">5</TableCell>
                  </TableRow>
                  
                  <TableRow>
                  <TableCell align="left">Tax</TableCell>
                  <TableCell align="left">$5</TableCell>
                  </TableRow>
                  
                  <TableRow>
                  <TableCell align="left">Shipping Charge</TableCell>
                  <TableCell align="left">$0</TableCell>
                  </TableRow>
                  
                  <TableRow>
                  <TableCell align="left"><Typography>Total</Typography></TableCell>
                  <TableCell align="left">$150</TableCell>
                  </TableRow>
              </Table>

          </TableContainer>
             </CardActions>
             <ListItem >
              <Button fullWidth variant="contained" color='secondary'>Place Order</Button>

             </ListItem>
            </Card>
          </Grid>
        </Grid>
      </div>
      </Layout>
    );
};

export default placeorder;