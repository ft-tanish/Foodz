import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';

export const RestrauntMenu = () => {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9204334&lng=77.63571390000001&menuId=" + id
        );
        const json = await data?.json();
        setRestaurant(json?.data)
    }

    return (!restaurant) ? <Shimmer /> : (
        <div className='menu'>
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} rating</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurant?.menu?.items).map((item) => (
                        < li key={item?.id} > {item?.name}</li>
                    ))
                    }
                </ul>

            </div>
        </div >
    )
}
