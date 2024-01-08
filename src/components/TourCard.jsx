import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import {createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
  components : {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11
          }
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 9
          }
        }
      ]
    }
  }
});

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <img
         src='https://travel.usnews.com/dims4/USNEWS/a23dc02/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2Fniagara_falls_getty_main_MPPJRs4.jpg' 
         alt=''
         className='img'/>
        <Box paddingX={1}>
         <Typography variant='subtitle1' component='h2'>
            Immerse into the Falls
          </Typography>
          <Box sx={{display:'flex', alignItems: 'center'}}>
            <AccessTime sx={{width: 12.5}}/>
            <Typography variant='body2' component='p' marginLeft={0.5}>
              5 hours
            </Typography>
          </Box>
          <Box sx={{display:'flex', alignItems: 'center'}} marginTop={3}>
            <Rating name='read-only' value={3.5} readOnly precision={0.5} size='small'/>
            <Typography variant='body2' component='p' marginLeft={0.5}>
              3.5
            </Typography>
            <Typography variant='body3' component='p' marginLeft={1.5}>
              (655 reviews)
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
              From C $146 
            </Typography>
          </Box>
        </Box>
      </Paper>
      </ThemeProvider>
     </Grid>
  );
};

export default TourCard;