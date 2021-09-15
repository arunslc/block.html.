import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid  from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';




const useStyle = makeStyles((theme)=>({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1631028353342-9c573a9bc957?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    postion: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]:{
      height: 300,
      fontSize: "3em"
    }
  },
  blogscontainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth:"100%"
  },
  media:{
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyle();

    return (
      <div className="App">
        <AppBar className={classes.appBar} postion="static">
          <Toolbar>
            <Typography variant="h6" color="primary">
              ARUN KUMAR
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>Arun Blog</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogscontainer}>
           <Typography variant="h4" className={classes.blogTitle}>
             Articles
           </Typography>
           <Grid container spacing={3}>
             <Grid item xs={3} sm={6} md={4}>
             <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                 className={classes.media}
                 image="https://images.unsplash.com/photo-1605702098590-d552a98dc93d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                 title="Contemplative Reptile"
              />
               <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Lizard
                </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                   across all continents except Antarctica
              </Typography>
           </CardContent>
        </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.autor}>
          <Avatar 
          src="https://images.unsplash.com/photo-1630255732364-a69ade0f0543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />
         <Box ml={2}>
         <Typography varient="subtitle2" component="p">
                 Guy Clemons
        </Typography>
        <Typography varient="subtitle2" color="textSecondary" component="p">
          Jun 22
        </Typography>        
         </Box>
       </Box>
       <Box>
         <BookmarkBorderIcon />
       </Box> 
      </CardActions>
    </Card>
             </Grid>
             <Grid item xs={3} sm={6} md={4}>
             <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                 className={classes.media}
                 image="https://images.unsplash.com/photo-1630798248935-0ceb55bf0fff?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                 title="Contemplative Reptile"
              />
               <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Lizard
                </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                   across all continents except Antarctica
              </Typography>
           </CardContent>
        </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.author}>
          <Avatar 
          src="https://images.unsplash.com/photo-1630735988588-bda27d58bfd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80" />
         <Box ml={2}>
         <Typography varient="subtitle2" component="p">
         Visual Karsa
        </Typography>
        <Typography varient="subtitle2" color="textSecondary" component="p">
          Jan 2
        </Typography>        
         </Box>
       </Box> 
       <Box>
         <BookmarkBorderIcon />
       </Box> 
        </CardActions>
          </Card>
             </Grid>
             <Grid item xs={3} sm={6} md={4}>
             <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                 className={classes.media}
                 image="https://images.unsplash.com/photo-1631027761930-bc3bcfd2be74?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                 title="Contemplative Reptile"
              />
               <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Lizard
                </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                   across all continents except Antarctica
              </Typography>
           </CardContent>
        </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.autor}>
          <Avatar src="https://images.unsplash.com/photo-1630682042260-ced75027ec6e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
         <Box ml={2}>
         <Typography varient="subtitle2" component="p">
         Brock Wegner
        </Typography>
        <Typography varient="subtitle2" color="textSecondary" component="p">
          Seb 28
        </Typography>        
         </Box>
       </Box> 
       <Box>
         <BookmarkBorderIcon />
       </Box> 
        </CardActions>
         </Card>
             </Grid>
             <Grid item xs={3} sm={6} md={4}>
             <Card className={classes.card}>
                <CardActionArea>
                <CardMedia
                 className={classes.media}
                 image="https://images.unsplash.com/photo-1543512155-eee54ad3bf48?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
                 title="Contemplative Reptile"
              />
               <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 Lizard
                </Typography>
                 <Typography variant="body2" color="textSecondary" component="p">
                   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                   across all continents except Antarctica
              </Typography>
           </CardContent>
        </CardActionArea>
      <CardActions className={classes.cardActions}>
       <Box className={classes.autor}>
          <Avatar src="https://images.unsplash.com/photo-1630783307551-52ccf353f659?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" />
         <Box ml={2}>
         <Typography varient="subtitle2" component="p">
          Nubelson
        </Typography>
        <Typography varient="subtitle2" color="textSecondary" component="p">
          Mar 12
        </Typography>        
         </Box>
       </Box> 
       <Box>
         <BookmarkBorderIcon />
       </Box> 
      </CardActions>
     </Card>
    </Grid>
      </Grid>
      <Box my={4} className={classes.paginationContainer}>
       <Pagination count={10} />
      </Box>
        </Container>
      </div>

    );
    }  

export default App;