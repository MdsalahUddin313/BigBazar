import { Card, CardActions, Grid, List, ListItem, Table, TableBody, TableCell, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../../Components/Layout';
import Leftvar from '../../Components/Leftvar';
import dash_graphs from './dash_graphs';

const dashboard = () => {
  return (
    <Layout>
      <div>
        <Grid container justifyContent="left">
          <Grid item md="2" xs="0">
            <Leftvar />
          </Grid>
          <Grid item container fullWidth md="8" xs="12">
            <Typography variant="h6" style={{padding:'15px'}} component="h1">
              Performance
            </Typography>
            <Grid container justifyContent="center" spacing={1}>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Sales
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography style={{ color: "#e91f84" }} variant="h4">
                          1020
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Visitors
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography color="primary" variant="h4">
                          51,200
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Total Puchase
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography color="secondary" variant="h4">
                          1020
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Purchase Cancel
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography style={{ color: "#c41fe9" }} variant="h4">
                          20
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Total Subscriber
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography style={{ color: "#088A29" }} variant="h4">
                          1,20,500
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Total Profit
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography style={{ color: "#2E2E2E" }} variant="h4">
                          20,000
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Total Due
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography style={{ color: "#0B243B" }} variant="h4">
                          120
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Gross Revenue
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography style={{ color: "#04B4AE" }} variant="h4">
                          12000
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Net Revenue
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="h4">12,000</Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Numver Of Orders
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography color="secondary" variant="h4">
                          15,000
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Average Order Value
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography color="primary" variant="h4">
                          1,50,000
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Numver Of Items Sold
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography color="secondary" variant="h4">
                          50,000
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item spacing={3}>
                <Card>
                  <CardActions>
                    <List container justifyContent="center">
                      <ListItem>
                        <Typography style={{ fontWeight: "bold" }}>
                          Total Refunds
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography color="primary" variant="h4">
                          1,50,000
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="subtitle">
                          Total for this month
                        </Typography>
                        <Typography
                          style={{ fontSize: "10px" }}
                          variant="subtitle"
                        >
                          {" "}
                          (Date:29 july 2021)
                        </Typography>
                      </ListItem>
                    </List>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          
          <dash_graphs></dash_graphs>
          </Grid>

        </Grid>
      </div>
    </Layout>
  );
};

export default dashboard;