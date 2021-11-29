import  React from 'react';
import './App.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import tick from './tick.png';
import cross from './cross.png';




export default function BasicCard() {
  return (
      
    <Card sx={{width:'1370px', height:'600px',backgroundImage: 'linear-gradient(to right, #0062E6 , #33AEFF)', padding: '5%', marginLeft:'0%',display:'flex', gap:'25px',overflowX:'none'}}>
     <Card sx={{ width: 420, height: 600, marginLeft:'20px' ,marginTop:'15px',borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',Button:{opacity:'1',}},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          FREE
        </Typography>
        <span className='dollar'>$0</span> <span className='months'>/month</span>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className='div1'>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Single User</span>
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>5GB Storage</span>
           
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Unlimited Public Projects</span>
            
        </div><br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Community Access</span>
            <br/>
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey" >Unlimited Private Projects</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Dedicated Phone Support</span>
            
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Free Subdomain</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Monthly Status Reports</span>
          
        </div>
        </div>
        </CardContent>
      <CardActions>
      <Button  class="btn" variant="contained">BUTTON</Button>
      </CardActions>
    </Card>
    <Card sx={{ width: 420, height: 600, marginLeft: 0 ,marginTop:'15px',borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',Button:{opacity:'1',},}}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          PLUS
        </Typography>
        <span className='dollar'>$9</span> <span className='months'>/month</span>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className='div1'>
        <div class="paradiv1">
            <img src={tick}/>
            <span><b>5 Users</b></span>
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>50GB Storage</span>
           
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Unlimited Public Projects</span>
            
        </div><br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Community Access</span>
            <br/>
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span  >Unlimited Private Projects</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span >Dedicated Phone Support</span>
            
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Free Subdomain</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={cross}/>
            <span class="grey">Monthly Status Reports</span>
          
        </div>
        </div>
        </CardContent>
      <CardActions>
      <Button  class="btn" variant="contained">BUTTON</Button>
      </CardActions>
    </Card>
    <Card sx={{ width: 420, height: 600, marginLeft: 0 ,marginTop:'15px',borderRadius:'25px',transition:'0.5s ease-in-out','&:hover':{transform:'translateY(-10px)',boxShadow:'-5px 0 10px -5px rgba(0,0,0,0.5), 5px 0 10px -5px rgba(0,0,0,0.5)',Button:{opacity:'1',},},}}>
      <CardContent>
        <Typography sx={{ fontSize: 14, fontWeight:700}} color="#989FA4"  gutterBottom>
          PRO
        </Typography>
        <span className='dollar'>$49</span> <span className='months'>/month</span>
        <br/>
        <br/>
        <hr></hr>
        <br/>
        <div className='div1'>
        <div class="paradiv1">
            <img src={tick}/>
            <span><b>Unlimited Users</b></span>
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>150GB Storage</span>
           
        </div>
        <br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Unlimited Public Projects</span>
            
        </div><br/>
        <div class="paradiv1">
            <img src={tick}/>
            <span>Community Access</span>
            <br/>
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Unlimited Private Projects</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Dedicated Phone Support</span>
            
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span><b>Unlimited</b> Free Subdomain</span>
          
        </div><br/>
        <div class="paradiv1">
            <img class="imgsize" src={tick}/>
            <span>Monthly Status Reports</span>
          
        </div>
        </div>
        </CardContent>
      <CardActions>
      <Button  class="btn" variant="contained">BUTTON</Button>
      </CardActions>
    </Card>
    </Card>
  );
}