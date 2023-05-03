import * as St from '../styles';
import { handleIncrease, handleDecrease } from './utils';

const MaxSumbitTimes = ({ question, questionIdx, setQuestions, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor="maxSubmitTimes">Maximum Submit Time:</label>
            <St.NumberInput>
                <div onClick={() => handleDecrease(questionIdx, setQuestions)}>-</div>
                <p>{question.maxSubmitTimes}</p>
                <div onClick={() => handleIncrease(questionIdx, setQuestions)}>+</div>
            </St.NumberInput>
            <h6 className="text-danger">{error}</h6>
        </div>
    );
};

export default MaxSumbitTimes;
