import React from 'react';

import logo from '../../assets/Header/logo.svg';
import localStorageUtils from '../../utils/Localstorage/index.js';
import authApi from '../../utils/api/authApi.js';
import useAuth from '../../utils/useAuth';
import { Container, Hero, Left, Right } from './styled';

function UserHeader() {
    // const { data } = useAuth();
    // console.log(data);
    const credential = localStorageUtils.getItem('credential');
    const [isUpdated, SetUpdated] = useState(false);
    useEffect(() => {
        getALlEvent();
    }, []);
    const getALlEvent = async () => {
        const path = await authApi.getInfoFromGG(credential);
        console.log(path);
        SetUpdated(true);
        if (path.data.code === 408) {
            toastError('Token hết hạn');
        }
    };
    return (
        <Container>
            <Left>
                <img src={logo} alt="Logo SVG" />
                <Hero>R.ode battle</Hero>
            </Left>
            <Right>
                <Hero>LE THANH LONG - SE172125</Hero>
            </Right>
        </Container>
    );
}

export default UserHeader;
