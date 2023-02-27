import React from 'react';
import { useRouteError } from 'react-router-dom';
import LogoImg from "../assests/images/logo.png";

const Error = () => {

    const err = useRouteError();
    const { status, statusText } = err;

    return (
        <div style={{ marginTop: "3rem" }}>
            <img src={LogoImg} alt='' />
            <h1>Oops!!</h1>
            <h2>Somethinh went Wrong</h2>
            <h3>{status + ":" + statusText}</h3>
        </div>
    )
}

export default Error