import React, { useEffect, useState } from 'react';

const useRestaurant = () => {

    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async (id) => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9204334&lng=77.63571390000001&menuId=" + id
        );
        const json = await data?.json();
        setRestaurant(json?.data)
    }

    return restaurant;
}

export default useRestaurant