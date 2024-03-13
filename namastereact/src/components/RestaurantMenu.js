import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

    const params  =  useParams();
    const {id} = params;
   
    const {restaurant,menu} = useRestaurant(id);
    
const dispatch = useDispatch()

    const addFooditem = (itemCards) =>{
        dispatch(addItem(itemCards.card.info));
    }
   

     
    return (!restaurant) ? <Shimmer/> : (
        <div className="flex">
            <div>
            <h1>Restaurant id:{id} </h1>
            <h2>{restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
            <h3>{restaurant.areaName}</h3>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.avgRating}</h3>
            <h3>{restaurant.costForTwo}</h3>
            </div>
           
            <div className="p-5">
               <h1>Menu</h1>
               <ul>
                
                   {(menu.itemCards).map((itemCards)=> {
                    
                    return(
                   <li key={itemCards?.card?.info?.id}
                   >{itemCards?.card?.info?.name} - <button className="p-1 m-1 bg-green-100" 
                   onClick={()=>addFooditem(itemCards)}
                   >Add</button></li>)})}
               </ul>

            </div>

        </div>
    )
}

export default RestaurantMenu;