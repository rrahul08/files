import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant =(id) => {
    const [restaurant,setRestaurant] = useState(null);
    const [menu,setMenu] = useState(null);

    useEffect(()=>{
       getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data =await fetch(FETCH_MENU_URL+id);
        const json = await data.json();
        // console.log(json.data?.cards[0]?.card?.card?.info);
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
        setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
        // console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name);


        
    }
    return{
        restaurant,
        menu
    }
}

export default useRestaurant;