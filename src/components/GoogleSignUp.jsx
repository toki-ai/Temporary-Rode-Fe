import { useState, useEffect, useRef, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Localstorage from '../utils/Localstorage';
import authApi from '../utils/api/authApi';

function GoogleSignUpButton() {
    const [gapiLoaded, setGapiLoaded] = useState(false);
    const refBtn = useRef();
    const navigate = useNavigate();
    const handleCredentialResponse = (response) => {
        authApi.login(response.credential).then((res) => {
            if (res.status == 200) {
                navigate('/register');
            }
        });
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        setGapiLoaded(true);
        script.onload = () => {
            google.accounts.id.initialize({
                client_id:
                    '970833900937-v2ssoqdoticb9em0hl48fdpe2ebg2n81.apps.googleusercontent.com',
                callback: handleCredentialResponse,
            });
            google.accounts.id.renderButton(
                refBtn.current,
                { theme: 'filled_blue', size: 'large', width: '190', text: 'signup_with' } // customization attributes
            );
            google.accounts.id.prompt();
            // google.accounts.id.disableAutoSelect();
        };

        document.body.appendChild(script);
        return () => {
            setGapiLoaded(false);
            document.body.removeChild(script);
        };
    }, []);

    return gapiLoaded ? <div type="button" ref={refBtn} /> : null;
}

export default GoogleSignUpButton;
