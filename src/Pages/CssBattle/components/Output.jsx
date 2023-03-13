import { useRef, useState } from 'react';

import UnknownBG from '../../../assets/Unknown/UnknownBG.png';
import { BoxOutput, Target } from '../styled';
import OutPutHeader from './OutPutHeader';

import Stack from 'react-bootstrap/Stack';

const Output = ({ code }) => {
    const userOutPutRef = useRef();
    const imgRef = useRef();
    const outputContainerRef = useRef();
    const iframeRef = useRef();

    const [diffChecked, setDiffChecked] = useState(false);

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
            <OutPutHeader />
            <BoxOutput>
                <div className="output-container" ref={outputContainerRef}>
                    <iframe
                        id="source"
                        className="iframe-output"
                        width="403px"
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
                        <img src={UnknownBG} width="400px" height="300px" alt="level1" />
                    </div>
                </div>
            </BoxOutput>
        </Stack>
    );
};

export default Output;
// <BoxOutput>
//     <Target>
//         <div className="item__header target">
//             <h3>target</h3>
//             <h4>400px x 300px</h4>
//         </div>
//         <TargetContent>
//             <img src={UnknownBG} className="target_img" />
//         </TargetContent>
//     </Target>
// </BoxOutput>
