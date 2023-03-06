import { useState, useEffect, useRef, useContext } from 'react';

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import Localstorage from '../../utils/Localstorage';
import authApi from '../../utils/api/authApi';
import { LoginStyle } from './style';

import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';

const handleCredentialResponse = (response) => {
    console.log(`Encoded JWT ID token: ${response.credential}`);
    authApi.login(response.credential).then((response) => {
        console.log(response);
        Localstorage.setItem('token', response.data.data);
        navigate('/');
    });
    authApi.register(response.credential).then((response) => {
        console.log(response);
    });
};
const GoogleLogin = () => {
    const [gapiLoaded, setGapiLoaded] = useState(false);
    const refBtn = useRef();
    const navigate = useNavigate();

    // const handleCredentialResponse = (response) => {
    //     console.log(`Encoded JWT ID token: ${response.credential}`);
    //     authApi.login(response.credential).then((response) => {
    //         console.log(response);
    //         Localstorage.setItem('token', response.data.data);
    //         navigate('/');
    //     });
    //     authApi.register(response.credential).then((response) => {
    //         console.log(response);
    //     });
    // };
    const Login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: { Authorization: `${response.access_token}` },
                    // callback: handleCredentialResponse,
                });
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <LoginStyle>
            <button
                onClick={Login}
                className="signUp-btn d-flex justify-content-center align-items-center"
            >
                <FcGoogle />
                Sign Up with Google
            </button>
        </LoginStyle>
    );
};

const GoogleLoginCustom = () => {
    return (
        <GoogleOAuthProvider
            clientId="970833900937-v2ssoqdoticb9em0hl48fdpe2ebg2n81.apps.googleusercontent.com"
            callback={handleCredentialResponse}
        >
            <GoogleLogin />
        </GoogleOAuthProvider>
    );
};
export default GoogleLoginCustom;
