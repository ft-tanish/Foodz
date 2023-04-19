import React from 'react'
import { IMG_CDN_URL } from '../constants';

export const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className='w-56 p-2 m-2 shadow-lg bg-orange-100 hover:bg-orange-200'>
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}
