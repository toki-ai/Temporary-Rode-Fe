import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const ContainerLayout = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 1440px;
    min-height: 100vh;
    margin: 0;
    padding: 0;
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
`;
