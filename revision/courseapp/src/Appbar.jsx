import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
   const navigate = useNavigate();

    return (
        <div>
            <div 
            style={{
                display:"flex",
                justifyContent:"space-between"
            }}      
            >
                <div>
                    <Typography variant="h5"  >Coursera</Typography>
                </div>
                <div>
                    <Button 
                    variant="contained"  
                    style={{marginRight:20}}
                    onClick={()=>{
                        navigate("/signup")
                    }}
                    >Signup</Button>
                    <Button 
                        variant="contained"  
                        style={{marginRight:10}}
                        onClick={()=>{
                            navigate("/signin")
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>

    )
}

export default Appbar;