import { themes } from '../../../themes';

// FE: Front-end
export const addFEQuestion = (setQuestions) => {
    setQuestions((prev) => [
        ...prev,
        {
            maxSubmitTimes: 0,
            questionImage: '',
            colors: themes.colors.primary,
            codeTemplate: '',
        },
    ]);
};

export const editColor = (value, questionIdx, currentColor, setQuestions) => {
    setQuestions((prev) =>
        prev.map((question, idx) => {
            if (idx !== questionIdx) return question;
            const colors = question.colors.split(',').filter(Boolean);
            const colorIdx = colors.indexOf(currentColor);
            colors[colorIdx] = value;
            return { ...question, colors: colors.filter(Boolean).join(',') };
        })
    );
};

export const addColor = (questionIdx, setQuestions) => {
    setQuestions((prev) => {
        let copy = [...prev];
        copy[questionIdx].colors += ',#ffffff';
        return copy;
    });
};

export const addCodeTemplate = (value, questionIdx, setQuestions) => {
    setQuestions((prev) => {
        let copy = [...prev];
        copy[questionIdx].codeTemplate = value;
        return copy;
    });
};

// BE: Backend
export const addBEQuestion = (setQuestions) => {
    setQuestions((prev) => [
        ...prev,
        {
            maxSubmitTimes: 0,
            questionImage: '',
            testcases: [{ input: '', output: '' }],
        },
    ]);
};

export const addTestcase = (questionIdx, setQuestions) => {
    setQuestions((prev) => {
        const { testcases, ...rest } = prev[questionIdx]; // destructure testcases array and the rest of the question object
        const newTestcases = [...testcases, { input: '', output: '' }]; // add a new testcase to the testcases array
        const updatedQuestion = { ...rest, testcases: newTestcases }; // create a new object with updated testcases array
        const updatedQuestions = [
            ...prev.slice(0, questionIdx),
            updatedQuestion,
            ...prev.slice(questionIdx + 1),
        ]; // replace the old question object with the updated one
        return updatedQuestions;
    });
};

export const editInputTestcase = (value, questionIdx, testcaseIdx, setQuestions) => {
    setQuestions((prev) => {
        let copy = [...prev];
        copy[questionIdx].testcases[testcaseIdx].input = value;
        return copy;
    });
};
export const editOutputTestcase = (value, questionIdx, testcaseIdx, setQuestions) => {
    setQuestions((prev) => {
        let copy = [...prev];
        copy[questionIdx].testcases[testcaseIdx].output = value;
        return copy;
    });
};

export const handleIncrease = (questionIdx, setQuestions) => {
    setQuestions((prev) => {
        let copy = [...prev];
        copy[questionIdx].maxSubmitTimes += 1;
        return copy;
    });
};

export const handleDecrease = (questionIdx, setQuestions) => {
    setQuestions((prev) => {
        let copy = [...prev];
        copy[questionIdx].maxSubmitTimes -= 1;
        return copy;
    });
};
