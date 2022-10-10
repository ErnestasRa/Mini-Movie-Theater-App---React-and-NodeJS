import * as React from 'react';

import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material'

const MovieCard = ({logo,title, description, reservations,  href}) => {
 
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={logo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={href} size="small">Buy a ticket</Button>
        <Button size="small">Read Description</Button>
      </CardActions>
      <Box>
        <Typography sx={{textAlign:'center'}}>
            Reservations: {reservations}
        </Typography>
      </Box>
    </Card>
  );
}

export default MovieCard