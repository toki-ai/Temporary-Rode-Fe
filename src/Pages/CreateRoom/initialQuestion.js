const BEInitQuestion = [
    {
        maxSubmitTimes: 0,
        questionImage: '',
        testcases: [
            { input: '', output: '' },
            // May have a lot of testcase { input, output }
        ],
    },
    // May have a lot of question { maxSubmitTimes, questionImage, testcases }]
];

const FEInitQuestion = [
    {
        maxSubmitTimes: 0,
        questionImage: '',
        colors: '#45ce7b',
        codeTemplate: '',
    },
    // May have a lot of question { maxSubmitTimes, questionImage, colors, codeTemplate }
];

export { BEInitQuestion, FEInitQuestion };
