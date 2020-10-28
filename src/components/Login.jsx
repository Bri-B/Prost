import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import Axios from 'axios';

const clientId = `838925295609-rh25afhf4it1rstq51pumhspvr7r09j7.apps.googleusercontent.com`

function Login() {
    const onSuccess = (res) => {
        console.log('[LOGIN SUCCESS] currentUser:', res.profileObj);
        Axios.get('/db/customers')
    }

    const onFailure = () => {
        console.log('[LOGIN FAILER] currentUser:', res)
    }

    //play "LET ME IN" GIF

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                    <Button variant="outlined" onClick={renderProps.onClick}>Login With Google</Button>
                )}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;
