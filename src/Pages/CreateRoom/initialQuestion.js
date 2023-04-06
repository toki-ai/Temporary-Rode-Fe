import { themes } from '../../themes';

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
        colors: themes.colors.primary,
        codeTemplate: '',
    },
    // May have a lot of question { maxSubmitTimes, questionImage, colors, codeTemplate }
];

export { BEInitQuestion, FEInitQuestion };
