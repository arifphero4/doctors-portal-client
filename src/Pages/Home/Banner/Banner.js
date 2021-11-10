import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography,Container } from '@mui/material';
import { Box} from '@mui/system';




const bannerBg = {
    background: `url(${bg})`
    

}

const verticalCenter = {
    display: 'flex',
    alignItems:  'center',
    height: 400
}



const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, my:2 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={5}>
                   <Box>
                         <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 12, fontWeight: 300, color: 'gray'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, est ab quos ex fugit dolore placeat quasi impedit aspernatur ipsam!
                        </Typography>
                        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                   </Box>
                </Grid>
                <Grid item xs={12} md={7} style={verticalCenter}>
                    <img style={{width: '380px'}} src={chair} alt="" />
                </Grid>             
            </Grid>
        </Container>
    );
};

export default Banner;