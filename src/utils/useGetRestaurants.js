import React, { useState, useEffect } from 'react'

const useGetRestaurants = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const getRestaurants = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9204334&lng=77.63571390000001&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
        );
        const json = await data?.json();
        setAllRestaurants(json?.data?.cards)
        setFilteredRestaurants(json?.data?.cards)
    }

    useEffect(() => {
        getRestaurants();
    }, [])

    return allRestaurants, filteredRestaurants;
}

export default useGetRestaurants