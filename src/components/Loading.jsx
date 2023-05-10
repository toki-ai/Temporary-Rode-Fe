import styled from 'styled-components';

import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <SpinContainer>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </SpinContainer>
    );
};

export default Loading;
export const SpinContainer = styled.div`
    // width: 100vw;
    /* height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // cursor: pointer;

    background-color: #d4d4d4; */

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1;
`;
