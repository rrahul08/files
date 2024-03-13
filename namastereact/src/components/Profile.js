import { useState } from "react";

const Profile = (props) =>{
    const [coutn,setCount] = useState(0);

    return (
        <div>
            <h2>
                Profile
            </h2>
            <h2>Name : {props.name}</h2>
            <h2>{coutn}</h2>
            <button onClick={()=> setCount(1)}>Count</button>
        </div>
    )
}

export default Profile;