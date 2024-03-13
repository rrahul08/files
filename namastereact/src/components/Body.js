import { render } from "react-dom";
import { restaurantlist } from "../constants";
import RestauarantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchText, restaurants) {
  
    return restaurants.filter((restaurant) => {
      
        if (restaurant && restaurant.info && restaurant.info.name) {
          
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        }
        return false; 
    });
}

const Body=()=>{

    const[allRestaurants,setallRestaurants] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState();

    useEffect(()=>{
          getRestaurants();
    },[])

    

    async function getRestaurants(){

        
        const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
console.log(json?.data);
console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
setallRestaurants(restaurants);
setfilteredRestaurants(restaurants);

    }
    const isOnline = useOnline();

    if(!isOnline){
        return <h1>Offline , Please check your internet connection !!</h1>
    }

   

    return (allRestaurants.length === 0)?<Shimmer/>:(
        <>
        <div className="search-cotainer p-5 bg-pink-50 my-5 ">
            <input type ="text" 
            className="search-input" 
            placeholder="search" 
            value={searchText}
            onChange={(e) =>{
                setSearchText(e.target.value);
            }
            }
            />
            <button 
              
            className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-300"
            onClick={()=>{
                const data = filterData(searchText,allRestaurants);

                setfilteredRestaurants(data);
                
            }}

            >Search</button>
        </div>
        <div className="flex flex-wrap">

            {
                filteredRestaurants.map((restaurant) =>{
                   return (
                   <Link to={"/restaurant/"+ restaurant?.info?.id} key={restaurant?.info?.id}><RestauarantCard {...restaurant?.info} /></Link>);
                })
            }
          
          
        </div>
        </>

    );
};

export default Body;