import React, { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../constants';

const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState();

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    const getRestaurantInfo = async () => {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data?.json();
        setRestaurant(json?.data);
    }

    return restaurant;

}

export default useRestaurant;