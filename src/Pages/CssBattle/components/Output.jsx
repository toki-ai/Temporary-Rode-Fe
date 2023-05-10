import { useRef, useState } from 'react';

import UnknownBG from '../../../assets/Unknown/UnknownBG.png';
import localFileApi from '../../../utils/api/localFileApi';
import { BoxOutput, Target, TextStyled, TextSmall } from '../styled';
import OutPutHeader from './OutPutHeader';

import Stack from 'react-bootstrap/Stack';

const Output = ({ code, data }) => {
    const userOutPutRef = useRef();
    const imgRef = useRef();
    const outputContainerRef = useRef();
    const iframeRef = useRef();
    const [slideChecked, setSlideChecked] = useState(false);
    const [diffChecked, setDiffChecked] = useState(false);

    const changeSlideCheckBoxValue = () => {
        setSlideChecked((state) => !state);
    };
    const changeDiffCheckBoxValue = () => {
        setDiffChecked((state) => !state);
    };
    const TestImg = localFileApi.getImg(data?.questions[0]?.questionImage);
    function imageCompareSlider(e) {
        if (slideChecked) {
            userOutPutRef.current.style.cursor = 'col-resize';
            iframeRef.current.style['z-index'] = '16';
            iframeRef.current.style['border-right'] = '2px solid red';
            iframeRef.current.style['border-left'] = 'none';
            iframeRef.current.style.width =
                e.clientX - outputContainerRef.current.offsetLeft + 'px';
        }
    }
    function resetWidth() {
        if (slideChecked) {
            userOutPutRef.current.style.cursor = 'unset';
            iframeRef.current.style['border-right'] = 'none';
            iframeRef.current.style['z-index'] = '10';
            imgRef.current.style['z-index'] = '9';
            iframeRef.current.style.width = '400px';
        }
    }
    return (
        <Stack>
            <OutPutHeader
                slideChecked={slideChecked}
                changeSlideCheckBoxValue={changeSlideCheckBoxValue}
                diffChecked={diffChecked}
                changeDiffCheckBoxValue={changeDiffCheckBoxValue}
            />
            <Stack gap={3}>
                <Stack className="align-items-center justify-content-center">
                    <BoxOutput>
                        <div className="output-container" ref={outputContainerRef}>
                            <iframe
                                id="source"
                                className="iframe-output"
                                width="400px"
                                height="300px"
                                title="output"
                                style={{ mixBlendMode: diffChecked ? 'difference' : 'normal' }}
                                ref={iframeRef}
                                srcDoc={code}
                            ></iframe>
                            <div
                                ref={userOutPutRef}
                                className="output-layer"
                                onMouseMove={imageCompareSlider}
                                onMouseLeave={resetWidth}
                            ></div>
                            <div id="img-layer" className="img-layer" ref={imgRef}>
                                <img src={TestImg ? TestImg : UnknownBG} alt="level1" />
                            </div>
                        </div>
                    </BoxOutput>
                </Stack>
                <Stack direction="horizontal" className="justify-content-between">
                    <TextStyled>target</TextStyled>
                    <TextSmall>400px x 300px</TextSmall>
                </Stack>
                <Stack className="align-items-center justify-content-center">
                    <BoxOutput>
                        <Target>
                            <img
                                src={TestImg ? TestImg : UnknownBG}
                                className="target_img"
                                alt="target_img"
                            />
                        </Target>
                    </BoxOutput>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Output;
