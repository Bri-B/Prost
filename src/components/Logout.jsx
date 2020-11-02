import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = '933644302187-agamsig0qalm5oi4fd44v11hfffpchs8.apps.googleusercontent.com'

const Logout = ({ setViewValue }) => {
    const onSuccess = () => {
        delete localStorage.customerToken;
        delete localStorage.ownerToken;
        console.log(localStorage);
        setViewValue('Landing')
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout
