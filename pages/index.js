import Layout from '../Components/Layout'
import { CardActionArea, CardActions, Card,CardContent, CardMedia, Grid, Typography, Button,Link } from '@material-ui/core'
import data from '../utils/fakedata'
//import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

//import NextLink from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {data.Products.map((products) => (
          <Grid item md={4} key={products.name}>
            <Card>
              <Link href={`/product/${products.slug}`} passhref="true">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={products.image}
                    title={products.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{products.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Typography>${products.price}</Typography>
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
