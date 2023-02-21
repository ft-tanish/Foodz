import React from 'react'
import { RestrauntCard } from './RestrauntCard';

const Body = () => {

    const restaurantList = []

    return (
        <div className='restraunt-list'>
            {restaurantList.map((restaurant) => {
                return <RestrauntCard {...restaurant.data} />
            })
            }
        </div>
    )
}

export default Body;