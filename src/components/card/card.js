import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid'


const CommonCard = ({image, name , price , city}) => {

  const handleClick = () => {
    alert('Added to wishlist')
  }
  return (
    <Card sx={{ maxWidth: 345 , marginBottom : '15px' }}>
    <CardMedia
      component="img"
      height="194"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4KBxhysjQAbmsf7eTj5SEv8IMOk7OwtucbJbTzPeyw&s"
      alt="Home"
    />  
    <CardContent>
    <Grid container spacing={0}>
    <Grid item md={8}>
    <Typography variant="body2" color="Black" fontWeight={'bold'}>
        {name}
      </Typography>
      <Typography variant="body2" color="Grey">
      {city}
    </Typography>
    <Typography variant="body2">
  {price ? price : 'Price not available'}
  </Typography>
      
    </Grid>
    <Grid item md={4}>
    <CardActions disableSpacing>
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color : 'orange'}} />} onClick={handleClick} />
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
  </CardActions>
    </Grid>
    </Grid>
    </CardContent>
  </Card>
  )
}

export default CommonCard
