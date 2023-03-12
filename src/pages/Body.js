import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RestrauntCard } from './RestrauntCard';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';


const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const data = filterData(searchText, allRestaurants);
        setFilteredRestaurants(data);
    }

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

    if (!allRestaurants) return null;

    return allRestaurants?.length === 0 ? <Shimmer /> : (
        <>
            <div className='search-cointainer'>
                <input type="text"
                    className='search-input'
                    placeholder='search'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} />
                <button
                    className='search-btn'
                    onClick={handleSearch}
                >Search</button>
            </div>

            <div className='restraunt-list'>
                {filteredRestaurants?.length === 0 ? <h3>No such restaurant with this name</h3> :
                    filteredRestaurants?.map((restaurant) => {
                        return (
                            <Link to={"/restaurant/" + restaurant?.data?.data?.id} key={restaurant?.data?.id}>
                                <RestrauntCard {...restaurant?.data?.data} key={restaurant?.data?.data?.id} />
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Body;