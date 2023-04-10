import * as St from '../styles';
import { handleIncrease, handleDecrease } from './utils';

const MaxSumbitTimes = ({ question, questionIdx, setQuestions }) => {
    return (
        <div>
            <label htmlFor="maxSubmitTimes">Maximum Submit Time:</label>
            <St.NumberInput>
                <div onClick={() => handleDecrease(questionIdx, setQuestions)}>-</div>
                <p>{question.maxSubmitTimes}</p>
                <div onClick={() => handleIncrease(questionIdx, setQuestions)}>+</div>
            </St.NumberInput>
        </div>
    );
};

export default MaxSumbitTimes;
