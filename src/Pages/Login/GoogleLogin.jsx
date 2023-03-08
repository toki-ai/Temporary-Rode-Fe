// import axios from 'axios';
// import { FcGoogle } from 'react-icons/fc';
// import { LoginStyle } from './style';
// import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
// const GoogleLogin = () => {
//     const Login = useGoogleLogin({
//         onSuccess: async (response) => {
//             try {
//                 const data = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
//                     headers: { Authorization: `Bearer  ${response.access_token}` },
//                 });
//                 console.log(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//     });
//     return (
//         <LoginStyle>
//             <button
//                 onClick={Login}
//                 className="login-btn d-flex justify-content-around align-items-center"
//             >
//                 <FcGoogle />
//                 Sign in with Google
//             </button>
//         </LoginStyle>
//     );
// };
// const GoogleLoginCustom = () => {
//     return (
//         <GoogleOAuthProvider clientId="970833900937-v2ssoqdoticb9em0hl48fdpe2ebg2n81.apps.googleusercontent.com">
//             <GoogleLogin />
//         </GoogleOAuthProvider>
//     );
// };
// export default GoogleLoginCustom;
