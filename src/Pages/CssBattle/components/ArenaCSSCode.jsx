import { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import ModalComponent from '../../../components/Modal';
import OffCanvasComponents from '../../../components/OffCanvas/OffCanvas';
import { toastSuccess, toastError } from '../../../components/Toast';
import Localstorage from '../../../utils/Localstorage';
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

const ArenaCSSCode = ({ setCode, setCount, count, code, data, submitService }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [userSubmit, setUserSubmit] = useState([]);
    const [submitStatus, setSubmitStatus] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const questionResult = JSON.parse(localStorage.getItem('authenticated(do not delete)'));
    console.log(questionResult);
    const submitCode = async () => {
        setSubmitStatus(false);
        const formatData = {
            roomId: data?.id,
            questionId: data?.questions[0].id,
            code: code,
        };

        const res = await submitApi.submit(formatData);
        console.log(res);
        if (res.data.status === 200) {
            submitService.setSubmit(res.data.data);
            setSubmitStatus(true);
            localStorage.setItem('authenticated', JSON.stringify(res.data.data));
        } else if (res.data.status === 400) {
            setSubmitStatus(true);
            toastError(res.data.err);
        }
    };

    const finish = async () => {
        let res = await userRoomApi.postFinish(location.state.userRoomId);

        if (res.data.status === 200) {
            navigate('/', { state: { success: true } });
            localStorage.removeItem('code');
            localStorage.removeItem('authenticated');
            localStorage.removeItem('countdownFuture');
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
    }, [show]);
    // questionResult.times.current === data?.questions[0].maxSubmitTimes;
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
