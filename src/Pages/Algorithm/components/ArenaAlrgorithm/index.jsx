import { useState, useEffect, useRef } from 'react';

import { useLoaderData } from 'react-router-dom';

import { WrapperStyle } from '../../styled';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const ArenaAlgorithm = () => {
    const roomInfo = useLoaderData();

    const [leftWidth, setLeftWidth] = useState('50%');
    const separatorRef = useRef(null);
    const [questionId, setQuestionId] = useState();
    const onMouseDown = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
        if (!separatorRef.current) return;
        const separatorRect = separatorRef.current.getBoundingClientRect();
        const newLeftWidth = `${e.clientX - separatorRect.width / 2}px`;
        setLeftWidth(newLeftWidth);
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    return (
        <WrapperStyle>
            <div className="app">
                <div className="left-section" style={{ width: leftWidth }}>
                    <LeftSection roomInfo={roomInfo} action={setQuestionId} />
                </div>
                <div className="separator" ref={separatorRef} onMouseDown={onMouseDown} />
                <div className="right-section">
                    <RightSection roomInfo={roomInfo} questionId={questionId} />
                </div>
            </div>
        </WrapperStyle>
    );
};

export default ArenaAlgorithm;
