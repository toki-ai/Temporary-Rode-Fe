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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // cursor: pointer;

    background-color: #d4d4d4;
`;
