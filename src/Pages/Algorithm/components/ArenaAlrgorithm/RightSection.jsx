import { Container, Stack } from 'react-bootstrap';

import { BoxEditor } from '../../styled';

import { htmlLanguage } from '@codemirror/lang-html';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import CodeMirror from '@uiw/react-codemirror';

const RightSection = () => {
    return (
        <Container className="p-2">
            <BoxEditor>
                <CodeMirror
                    className="editor"
                    // value={code ? code : CodeTemplateTmp}
                    // width="100%"
                    theme={tokyoNight}
                    height="calc(100vh - 200px);"
                    extensions={[htmlLanguage]}
                    options={{ lineWrapping: 'true', lineNumbers: 'true', autoCloseBrackets: true }}
                    // onChange={(e) => {
                    //     setCode(e);
                    //     setCount(e.length);
                    // }}
                />
            </BoxEditor>
            <div> Question select</div>
        </Container>
    );
};

export default RightSection;
