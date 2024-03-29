import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import {Card} from '@mui/material';

function Signin() {
 return <div>
   
  
    <div style={{
        paddingTop:150,
        marginBottom:10,
        display:"flex",
        justifyContent:"center"
    }}><Typography variant='h6'>
        Welcome back ! Sign in below
        </Typography>
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Card variant={"outlined"} style={{width:400,padding:20}}>
    <TextField 
    fullWidth={true}
    id="outlined-basic" 
    label="Email" 
    variant="outlined" />
    <br/><br/>
    <TextField 
    fullWidth={true}
    id="outlined-basic" 
    label="Password" 
    variant="outlined" />
    <br/><br/>
    <Button size='large' variant="contained">Signin</Button>
    </Card>
    </div>
 </div>   
}

export default Signin;