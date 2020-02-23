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
        margin: '0',
        padding: '10px 0px'
      },
      interior: {
        padding:'20px 0',
        backgroundImage: "url(https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Health/08August/Cr-Health-InlineHero-How-To-Hear-Better-At-Concerts-8-19)",
        backgroundSize: 'cover'
      },
      cardImage: {
        paddingTop: '75%', /*Adjust this number to 'reveal' a percentage of the image*/
      },
      desc: {
        backgroundColor: '#424242D3',
        padding: '0 20px',
        color: 'white',
        padding: '0px',
        width: '100%'
      },
      ticketButton: {
      	margin: '20px 0'
      }  
    }
  );
}

const EventCard2 = () => {
  const classes = CardStyle();

  return(
  	<Grid container lg={3} sm={6} xs={12}>
	  	<Card variant="outlined" style= {classes.root}>
	        <CardHeader 
	          title="Aunt Jemima Somewhere in Houston"
	          subheader="September 14, 2016"
	          style= {classes.header}
	        />
	        
	  		<div style={classes.interior}>
	  			<Grid lg={12} container alignItems="center">
		  			<Grid item lg={5} sm={6} xs={12} >
		  				<CardMedia           
				          	alt= 'Aunt Jemima'
				          	title= 'Aunt Jemima'
				          	image='https://townsquare.media/site/518/files/2017/05/Aunt-Jemima.png?w=980&q=75'
				          	style={classes.cardImage}
			        	/>
		        	</Grid>
		        	<Grid item lg={7} sm={6} xs={12} container>
			        	<p style = {classes.desc}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "</p>
		        	</Grid>	
	        	</Grid>
	  		</div>

	        <Button style={classes.ticketButton} size="medium" variant="contained" color="primary">
	          Get Tickets
        	</Button>
	  	</Card>
  	</Grid>
  );
}

export default EventCard2;