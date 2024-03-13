import { createContext } from "react";

const UserContext = createContext({
    user:{
    name : "nmae",
    email : "email"
    }
});

export default UserContext;