import * as St from '../styles';
import { addCodeTemplate } from './utils';

const CodeTemplate = ({ questionIdx, setQuestions, error }) => {
    return (
        <St.CodeTemplate>
            <label htmlFor="codeTemplate">Code</label>
            <div>
                <textarea
                    name="codeTemplate"
                    id="codeTemplate"
                    cols="40"
                    rows="80"
                    onChange={(e) => addCodeTemplate(e.target.value, questionIdx, setQuestions)}
                    placeholder={`<div></div>\n<style>\n    div {\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #dd6b4d;\n    }\n</style>`}
                />
            </div>
        </St.CodeTemplate>
    );
};

export default CodeTemplate;
