import { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
// import Loading from '../../../components/Loading';
import OffCanvasComponents from '../../../components/OffCanvas/OffCanvas';
import { toastSuccess } from '../../../components/Toast';
// import { useDebounce } from '../../../hooks/useDebounce';
// import { CodeTemplateTmp } from '../../../utils/Constant/Dummy';
import submitApi from '../../../utils/api/submitApi';
import submitHistoryApi from '../../../utils/api/submitHistoryApi';
import userRoomApi from '../../../utils/api/userRoomApi';
import { BoxEditor, TextStyled, TextSmall } from '../styled';
import MySolution from './MySolution';

import { htmlLanguage } from '@codemirror/lang-html';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

const LIST_SOLUTION = [
    {
        id: 1,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
    {
        id: 2,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
    {
        id: 3,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
    {
        id: 4,
        record: 'Score: 100.35 {564}, 99% match',
        code: '<div></div> <style> div { width: 100%; height: 100%; border-radius: 5px; background: #F5D6B4; } </style> <!-- OBJECTIVE --> <!-- Write HTML/CSS in this editor and replicate the given target image in the least code possible. What you write here, renders as it is --> <!-- SCORING --> <!-- The score is calculated based on the number of characters you use (this comment included :P) and how close you replicate the image. Read the FAQS (https://cssbattle.dev/faqs) for more info. --> <!-- IMPORTANT: remove the comments before submitting -->',
    },
];
const ArenaCSSCode = ({ setCode, setCount, count, code, data, submitService }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [userSubmit, setUserSubmit] = useState([]);
    const [submitStatus, setSubmitStatus] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const submitCode = async () => {
        setSubmitStatus(false);
        const formatData = {
            roomId: data?.id,
            questionId: data?.questions[0].id,
            code: code,
        };
        console.log(formatData);
        const res = await submitApi.submit(formatData);
        console.log('line 53: ', res);
        if (res.data.status === 200) {
            submitService.setSubmit(res.data.data);
            setSubmitStatus(true);
            localStorage.setItem('authenticated', JSON.stringify(res.data.data));
        }
    };

    const finish = async () => {
        let res = await userRoomApi.postFinish(location.state.userRoomId);
        console.log(res);
        if (res.data.status === 200) {
            navigate('/', { state: { success: true } });
            localStorage.removeItem('code');
            localStorage.removeItem('authenticated');
            toastSuccess(res.data.message);
        }
    };

    useEffect(() => {
        let req = {
            roomId: data?.id,
        };
        submitHistoryApi.getInfoSubmission(req).then((res) => {
            if (res.data.status === 200) {
                setUserSubmit([...res.data.data]);
            }
        });
    }, [submitStatus]);
    return (
        <>
            <OffCanvasComponents title="My Solution" show={show} setShow={setShow}>
                <MySolution data={userSubmit} />
            </OffCanvasComponents>

            <Stack direction="horizontal" className="justify-content-between mb-3">
                <TextStyled>EDITOR</TextStyled>
                <TextSmall>{count} characters</TextSmall>
            </Stack>
            <BoxEditor>
                <CodeMirror
                    className="editor"
                    value={code}
                    width="100%"
                    theme={tokyoNight}
                    height="calc(100vh - 200px);"
                    extensions={[htmlLanguage]}
                    options={{ lineWrapping: 'true', lineNumbers: 'true', autoCloseBrackets: true }}
                    onChange={(e) => {
                        setCode(e);
                        localStorage.setItem('code', e);
                        setCount(e.length);
                    }}
                />
            </BoxEditor>
            <Stack
                direction="horizontal"
                className="align-items-center mt-3 justify-content-center"
                gap={3}
            >
                <ButtonStyled buttonType="base" onClick={handleShow}>
                    My SOLUTION
                </ButtonStyled>
                <ButtonStyled buttonType="base" onClick={submitCode} disabled={!submitStatus}>
                    {submitStatus ? 'SUBMIT' : <Spinner />}
                </ButtonStyled>
                <ButtonStyled buttonType="base" onClick={finish}>
                    Finish
                </ButtonStyled>
            </Stack>
        </>
    );
};

export default ArenaCSSCode;
