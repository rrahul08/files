import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
    return (
      <div className="w-52 p-2 m-2 shadow-lg bg-pink-50">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines ? cuisines.join(", ") : "Cuisine information not available"}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };
  
  export default RestaurantCard;