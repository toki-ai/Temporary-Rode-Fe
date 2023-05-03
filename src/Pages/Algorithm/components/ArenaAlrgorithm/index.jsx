import { useState, useEffect, useRef } from 'react';

import { useLoaderData } from 'react-router-dom';

import { WrapperStyle } from '../../styled';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const ArenaAlgorithm = () => {
    const roomInfo = useLoaderData();

    const [code, setCode] = useState();
    const [showResult, setShowResult] = useState(false); // Show small tabs
    const [resInfo, setResInfo] = useState(0);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showRightSection, setShowRightSection] = useState(false);

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
                    <LeftSection
                        roomInfo={roomInfo}
                        action={setQuestionId}
                        setCurrentQuestion={setCurrentQuestion}
                        setShowRightSection={setShowRightSection}
                        setShowResult={setShowResult}
                        setCode={setCode}
                        setResInfo={setResInfo}
                    />
                </div>
                <div className="separator" ref={separatorRef} onMouseDown={onMouseDown} />

                {showRightSection && (
                    <div className="right-section">
                        <RightSection
                            roomInfo={roomInfo}
                            questionId={questionId}
                            currentQuestion={currentQuestion}
                            code={code}
                            setCode={setCode}
                            showResult={showResult}
                            setShowResult={setShowResult}
                            resInfo={resInfo}
                            setResInfo={setResInfo}
                        />
                    </div>
                )}
            </div>
        </WrapperStyle>
    );
};

export default ArenaAlgorithm;
