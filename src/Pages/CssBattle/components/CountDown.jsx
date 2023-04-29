import React, { useState } from 'react';

import { Infinity } from 'react-bootstrap-icons';

import { useCountdown } from '../../../hooks/useCountDown';
import DateTimeDisplay from './DateTimeDisplay';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
        </div>
    );
};

const ShowCounter = ({ counterValue, minutes }) => {
    return (
        <div className="show-counter">
            <div className="countdown-link">
                <DateTimeDisplay value={counterValue} type={'Mins'} isDanger={minutes <= 5} />
            </div>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [expired, setExpired] = useState(false);

    const [minute, second, countdownValue] = useCountdown(targetDate);

    if (minute <= 0 && second <= 0 && targetDate != null) {
        if (expired == false) {
            setExpired(true);
        }
        localStorage.removeItem('countdownFuture');
        window.location = '/';

        return <ExpiredNotice />;
    } else if (targetDate === null) {
        return <Infinity />;
    } else {
        return <ShowCounter counterValue={countdownValue} minutes={minute} />;
    }
};

export default CountdownTimer;
