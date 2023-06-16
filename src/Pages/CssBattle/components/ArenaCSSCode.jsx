import { useState, useEffect } from 'react';

import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';

import ButtonStyled from '../../../components/Button';
import OffCanvasComponents from '../../../components/OffCanvas/OffCanvas';
import { toastSuccess, toastError } from '../../../components/Toast';
import { USER_ROOM_ID } from '../../../config';
import submitApi from '../../../utils/api/submitApi';
import submitHistoryApi from '../../../utils/api/submitHistoryApi';
import userRoomApi from '../../../utils/api/userRoomApi';
import { BoxEditor, TextStyled, TextSmall } from '../styled';
import MySolution from './MySolution';

import { htmlLanguage } from '@codemirror/lang-html';
import { EditorView } from '@codemirror/view';
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
    // const questionResult = JSON.parse(localStorage.getItem('authenticated(do not delete)'));
    const [cookies, setCookie] = useCookies([USER_ROOM_ID]);

    const submitCode = async () => {
        setSubmitStatus(false);
        const formatData = {
            roomId: data?.id,
            questionId: data?.questions[0].id,
            code: code,
        };

        const res = await submitApi.submit(formatData);

        if (res.data.status === 200) {
            submitService.setSubmit(res.data.data);
            setSubmitStatus(true);
            localStorage.setItem('authenticated', JSON.stringify(res.data.data));
        } else if (res.data.status === 400) {
            setSubmitStatus(true);
            toastError(res.data.err);
        }
    };
    function deleteCookies(name) {
        cookies.remove(name, { path: '/' });
    }
    const finish = async () => {
        let res = await userRoomApi.postFinish(cookies.userroomid);

        if (res.data.status === 200) {
            navigate('/', { state: { success: true } });
            localStorage.removeItem('code');
            localStorage.removeItem('authenticated');
            localStorage.removeItem('countdownFuture');
            cookies.remove(USER_ROOM_ID, { path: '/' });
            deleteCookies(USER_ROOM_ID);
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
                    extensions={[htmlLanguage, EditorView.lineWrapping]}
                    basicSetup={{
                        foldGutter: false,
                        dropCursor: false,
                        allowMultipleSelections: false,
                        indentOnInput: false,
                    }}
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
                <ButtonStyled buttonType="outline" onClick={handleShow}>
                    MY SOLUTION
                </ButtonStyled>
                <ButtonStyled buttonType="outline2" onClick={submitCode} disabled={!submitStatus}>
                    {submitStatus ? 'SUBMIT' : <Spinner />}
                </ButtonStyled>
                <ButtonStyled buttonType="outline" onClick={finish}>
                    FINISH
                </ButtonStyled>
            </Stack>
        </>
    );
};

export default ArenaCSSCode;
