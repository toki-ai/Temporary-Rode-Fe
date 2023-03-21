import { useState } from 'react';

import ButtonStyled from '../../../components/Button';
import { BoxEditor, TextStyled, TextSmall } from '../styled';

import { htmlLanguage } from '@codemirror/lang-html';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';
import Stack from 'react-bootstrap/Stack';

const ArenaCSSCode = ({ setCode, setCount, count, code }) => {
    return (
        <>
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
                        setCount(e.length);
                    }}
                />
            </BoxEditor>
            <Stack
                direction="horizontal"
                className="align-items-center mt-3 justify-content-center"
                gap={3}
            >
                <ButtonStyled buttonType="base">My SOLUTION</ButtonStyled>
                <ButtonStyled buttonType="base">SUBMIT</ButtonStyled>
            </Stack>
        </>
    );
};

export default ArenaCSSCode;
