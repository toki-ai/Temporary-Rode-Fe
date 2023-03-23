import { ScoreText } from '../styled';

const Scores = ({ submitTimes }) => {
    return (
        <>
            <div>
                {' '}
                Last Score: <ScoreText>{'100%'}</ScoreText>
            </div>
            <div>
                {' '}
                MaxSubmit:<ScoreText> {submitTimes} times</ScoreText>
            </div>
        </>
    );
};

export default Scores;
