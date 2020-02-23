import React from 'react';
import {Button, Card, CardMedia, CardHeader, Grid} from '@material-ui/core';
import '../index.css';

function CardStyle()
{
    return(
    {
    /*Adjust the card overall*/
      root: {
        backgroundColor: '#424242',
        textAlign: 'center',
      },
      header: {
        backgroundColor: '#D3D3D3',
        padding: '10px 0px'
      },
      cardImage: {
        paddingTop: '60%', /*Adjust this number to 'reveal' a percentage of the image*/
        backgroundSize:'cover'
      },
      desc: {
        backgroundColor: '#424242',
        padding: '20px 20px 0',
        color: 'white',
        //border: 'solid 1px red',
        margin:0
      },
      ticketButton: {
        margin: '20px'
      }   
    }
  );
}

const EventCard = () => {
  const classes = CardStyle();

  return(
    <Grid lg={3} md={6} sm={6} xs={12}>
      <Card variant="outlined" style = {classes.root}>        
        <CardHeader 
          title="Aunt Jemima Somewhere in Houston"
          subheader="September 14, 2016"
          style= {classes.header}
        />

        <CardMedia           
          alt= 'Aunt Jemima'
          title= 'Aunt Jemima'
          image='https://townsquare.media/site/518/files/2017/05/Aunt-Jemima.png?w=980&q=75'
          style={classes.cardImage}
        />

        <p style = {classes.desc}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "</p>
        <Button style={classes.ticketButton} variant="contained" color="primary">
          Get Tickets
        </Button>
      </Card>
    </Grid>
  );
}

export default EventCard;