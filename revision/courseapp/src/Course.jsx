import { useState } from "react";
import { Button, Card } from '@mui/material';

import TextField from '@mui/material/TextField';


function Course(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return(
        
        <div>
         
        <div style={{
          paddingTop: 230,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
        }}>
               Add Courses here !
               </div>
         
               <div style={{display:"flex",justifyContent:"center"}}>
          <Card variant='outlined' style={{ width: 400, padding: 20 }}>
            <div>
                
              <TextField id="outlined-basic" label="title" variant="outlined" style={{ width: 400 }} 
                onChange={(e)=>{
                  setTitle(e.target.value);
                }}
              />
              <br /><br />
              <TextField id="outlined-basic" label="description" variant="outlined" style={{ width: 400 }} 
                onChange={(e)=>{
                  setDescription(e.target.value);
                }}

              />
              <br /><br />
              <div style={{display:"flex",justifyContent:"center"}}>
                <Button variant="contained"
                  onClick={()=>{
                    fetch("http://localhost:3000/admin/courses",{
                      method:"POST",
                      body:JSON.stringify({
                        title,
                        description,
                        imagelink:"",
                        published:true

                      }),
                      headers:{
                        "Content-type":"application/json",
                        "Authorization":"Bearer "+ localStorage.getItem("token")
                      }
                    }).then((res)=>{
                      res.json().then((data)=>{
                        localStorage.setItem("token",data.token)
                      })
                    })
                  }}

                >
                  Add Course
                </Button>
            </div>
            </div>
          </Card>
          </div> 
        </div>
    )
}

export default Course;