import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const ContainerLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Body = styled.div`
    display: flex;
    width: 100%;
    column-gap: 10px;
    position: relative;
`;
export const BackgroundGray = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0%;
    height: 50%;
    background-color: rgba(123, 129, 138, 1);
`;
export const Background = styled.div`
    width: 100%;
    height: 50%;
    background-image: url('https://images2.imgbox.com/5d/21/BhenFkhB_o.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
