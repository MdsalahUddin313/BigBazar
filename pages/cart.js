import { Card, Grid, Table, TableBody, TableRow, TableContainer, Typography, TableCell, CardAction, Button, CardMedia, CardActions, List, ListItem, CardActionArea } from '@material-ui/core';
import React from 'react';
import Layout from '../Components/Layout';
import data from '../utils/fakedata';
import useStyles_window from './../utils/style';
const cart = () => {
    const classes = useStyles_window();
    return (
      <Layout>
        <div container spacing={1} justifyContent="center">
          <Typography
            className={classes.page_title}
            color="primary"
            variant="h5"
            component="h1"
          >
            Cart Items
          </Typography>
          <Grid container fullWidth className={classes.grid_product_list}>
            <Grid fullWidth item md="9" xs="6">
              <Card>
                <CardActionArea>
                  {data.Cart_product.map((e) => (
                    <TableContainer key={e.name}>
                      <Table container>
                        <TableBody>
                          <TableRow fullWidth>
                            <TableCell>
                              {" "}
                              <CardMedia
                                component="img"
                                image={e.image}
                                title={e.name}
                                height="90"
                              ></CardMedia>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> {e.name} </Typography>{" "}
                            </TableCell>
                            <TableCell>
                              <select defaultValue="1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>{" "}
                            </TableCell>
                            <TableCell>
                              <Typography variant="h6"> {e.price} </Typography>{" "}
                            </TableCell>
                            <TableCell>
                              <Button variant="contained" color="primary">
                                X
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ))}
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item fullWidth container md="3" xs="6">
              <Card className={classes.suvtotal_part}>
                <CardActions>
                  <List>
                    <ListItem>
                      <Typography variant="h6">Subtotal (2 Items):</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography>$160</Typography>
                    </ListItem>
                    <ListItem>
                      <Button variant="contained" color="secondary" fullWidth>
                        Check Out
                      </Button>
                    </ListItem>
                  </List>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
};

export default cart;