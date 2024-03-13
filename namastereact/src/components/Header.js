import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


export const Title = ()=>{return(
    <a href="/">
    <img
    className="h-28 p-2" 
    alt="logo"  
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&usqp=CAU"/>
</a>
);
};

const HeadComponent = ()=>{
    
    const[isloggedin,setIsloggedin] = useState(false);

    const {user} =useContext(UserContext)
    

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);


    return (<div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-200 md:bg-yellow-200">
        <Title/> 
        <div className="nav-items ">
            <ul className="flex py-10" >
                <Link to="/"><li className="px-2" >Home</li></Link>
                <Link to="/about">
                <li  className="px-2">About</li></Link>
                <Link to="/contact"><li  className="px-2">Contact</li></Link>
                <Link to="/cart"><li  className="px-2">Cart-{cartItems.length}</li></Link>
                <Link to="/instamart"><li  className="px-2">Instamart</li></Link>
            </ul>
           
        </div>
     
        {
               isloggedin ? (<button onClick={()=>setIsloggedin(false)} >logout</button> 
               ):( 
               <button onClick={()=>setIsloggedin(true)}>login</button>)
            }

    </div>
    );
};

export default HeadComponent;