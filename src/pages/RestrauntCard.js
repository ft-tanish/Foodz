import React from 'react'

export const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
}) => {
    return (
        <div className='card'>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vb9qcw8np3sjkj2dtksl"
                + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}
