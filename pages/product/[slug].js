import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/fakedata';
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import Layout from '../../Components/Layout';
import Image from 'next/image';
//import { NextLink } from 'next/link';
import useStyles from './../../utils/style';

const ProductScreen = () => {
    const classes =useStyles();
    const router =useRouter();
    const {slug} =router.query;
    const product =data.Products.find((a)=>a.slug ===slug);
    if(!product){
        return <div>Product Not found</div>
    }
    return (
    <Layout title={[product.name]}>      
        
        <div>
        <Link href='/' passHref>
        <Typography spacing={1} className={classes.back_to_home}> Back to Home page </Typography>
        </Link>

          <Grid container spacing = {1} >
            <Grid item md={6} xs={12}>
             <Image src={product.image} alt={product.name} width={640} height={640} layout= "responsive" ></Image>                
            </Grid>   

            <Grid item md={3} xs={12}>
              <List>
                  <ListItem><Typography component="h1" variant="h5">Title:{product.name}</Typography></ListItem>
                  <ListItem><Typography>Brand:{product.brand}</Typography></ListItem>
                  <ListItem><Typography>Ratings:{product.rating}</Typography></ListItem>
                  <ListItem><Typography>Description:{product.description}</Typography></ListItem>      
              </List>
            </Grid> 
            
               <Grid fullWidth md={3} xs={12}>
                 
                    <List>
                    <Card>
                        <ListItem>
                            <Grid container>
                                <Grid item> <Typography color={'primary'}> Price:</Typography></Grid>
                                <Grid item> <Typography color={'secondary'}> ${product.price} </Typography></Grid>                 
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid container>
                                <Grid item> <Typography color={'primary'}> Status:</Typography></Grid>
                                <Grid item> <Typography> {product.countInStock>0?'In stock':'Unavailable'} </Typography></Grid>                 
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Button fullWidth variant="contained" color={'primary'} >Add To Cart</Button>
                        </ListItem>
                        </Card> 
                    </List>                                       
               </Grid>                  
          </Grid>                             
        </div>
    </Layout>

    );
};

export default ProductScreen;