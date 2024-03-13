import { Button, Card } from '@mui/material';

import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Signup() {
  const [ email , setEmail] = useState("");
  const [ password , setPassword ] = useState("");


    return( 
        <div>
          {email}
        <div style={{
          paddingTop: 230,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
        }}>
               Welcome to Coursera ! Signup below
               </div>
         
               <div style={{display:"flex",justifyContent:"center"}}>
          <Card variant='outlined' style={{ width: 400, padding: 20 }}>
            <div>
                
              <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: 400 }} 
                onChange={(e)=>{
                  setEmail(e.target.value);
                }}
              />
              <br /><br />
              <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: 400 }} 
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}

              />
              <br /><br />
              <div style={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained"
                  onClick={()=>{
                    fetch("http://localhost:3000/admin/signup",{
                      method:"POST",
                      body:JSON.stringify({
                        username:email,
                        password:password
                      }),
                      headers:{
                        "Content-type":"application/json"
                      }
                    }).then((res)=>{
                      res.json().then((data)=>{
                        localStorage.setItem("token",data.token)
                      })
                    })
                  }}

                >
                  Signup
                </Button>
            </div>
            </div>
          </Card>
          </div> 
        </div>

      
    )
}

export default Signup;