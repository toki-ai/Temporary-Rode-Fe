/* eslint-disable prettier/prettier */
import { useState, useEffect, useRef } from 'react';
// import google from 'https://accounts.google.com/gsi/client';

function GoogleSignInButton() {
    const [gapiLoaded, setGapiLoaded] = useState(false);

    const refBtn = useRef();

    function handleCredentialResponse(response) {
        console.log(`Encoded JWT ID token: ${response.credential}`);
    }
    //   const handleSignIn = () => {
    //     console.log(google);
    //   };
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
                { theme: 'outline', size: 'large' } // customization attributes
            );
            google.accounts.id.prompt();
        };

        document.body.appendChild(script);
        return () => {
            setGapiLoaded(false);
            document.body.removeChild(script);
        };
    }, []);

    return gapiLoaded ? <div type="button" ref={refBtn} /> : null;
}

export default GoogleSignInButton;
