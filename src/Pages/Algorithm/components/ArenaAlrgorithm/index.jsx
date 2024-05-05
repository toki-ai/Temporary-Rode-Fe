import { useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import { WrapperStyle } from '../../styled';
import LeftSection from './LeftSection';

const ArenaAlgorithm = () => {
    const roomInfo = useLoaderData();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const codeTemplate = roomInfo?.questions[currentQuestion]?.codeTemplate;

    return (
        <WrapperStyle>
            <div className="app">
                <LeftSection roomInfo={roomInfo} />
            </div>
        </WrapperStyle>
    );
};

export default ArenaAlgorithm;
