// import React, { useState, useEffect } from 'react';
// import roomApi from '../../../../utils/api/roomApi';
// import Btn from './Btn';
// import TableAll from './Table/TableAll';
// import TableQuestion from './Table/TableQuestion';
// const fields = [
//     {
//         id: 1,
//         value: 'All',
//         className:
//             'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-left br-none',
//     },
//     {
//         id: 2,
//         value: 'Question 1',
//         className: 'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-0 ',
//     },
//     {
//         id: 3,
//         value: 'Question 2',
//         className:
//             'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-0 bl-none',
//     },
//     {
//         id: 4,
//         value: 'Question 3',
//         className:
//             'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-right bl-none',
//     },
// ];
// const FilterQues = ({ roomID }) => {
//     const [ques, setQues] = useState('All');
//     const [numOfQues, setNumOfQues] = useState([]);
//     const [questionLength, setQuestionLength] = useState();
//     const [quesID, setQuesID] = useState();
//     useEffect(() => {
//         roomApi
//             .getRoomById(roomID)
//             .then((res) => {
//                 console.log(res.data.data.questions.length);
//                 setQuestionLength(res.data.data.questions.length);
//                 setNumOfQues(res.data.data.questions);
//                 console.log(res.data.data.questions);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);
//     const handleOnClick = (e) => {
//         var result = e.target.value;
//         setQues(e.target.value);
//     };
//     const TableQues = () => {
//         if (ques == 'All') return <TableAll roomID={roomID} />;
//         else {
//             {
//                 numOfQues.map((item) => {
//                     return <TableQuestion ques={item.id} />;
//                 });
//             }
//         }
//         // else if (ques == 'Question 1') return <TableQuestion ques="1" />;
//         // else if (ques == 'Question 2') return <TableQuestion ques="2" />;
//         // else if (ques == 'Question 3') return <TableQuestion ques="3" />;
//     };
//     return (
//         <>
//             <div className="my-3 listBtn_custom">
//                 {fields.map((item) => {
//                     return (
//                         <Btn
//                             key={item.id}
//                             name={item.value}
//                             handleOnClick={handleOnClick}
//                             className={item.className}
//                         />
//                     );
//                 })}
//             </div>
//             <TableQues />
//         </>
//     );
// };
// export default FilterQues;
import React, { useState } from 'react';

import Btn from './Btn';
import TableAll from './Table/TableAll';
import TableQuestion from './Table/TableQuestion';

const fields = [
    {
        id: 1,
        value: 'All',
        className:
            'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-left br-none',
    },
    {
        id: 2,
        value: 'Question 1',
        className: 'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-0 ',
    },
    {
        id: 3,
        value: 'Question 2',
        className:
            'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-0 bl-none',
    },
    {
        id: 4,
        value: 'Question 3',
        className:
            'color_primary border_color_primary btn_primary col-2 miw-108 mw-180 rounded-right bl-none',
    },
];

const FilterQues = () => {
    const [ques, setQues] = useState('All');
    const handleOnClick = (e) => {
        var result = e.target.value;
        setQues(result);
    };
    const TableQues = () => {
        if (ques == 'All') return <TableAll />;
        else if (ques == 'Question 1') return <TableQuestion ques="1" />;
        else if (ques == 'Question 2') return <TableQuestion ques="2" />;
        else if (ques == 'Question 3') return <TableQuestion ques="3" />;
    };
    return (
        <>
            <div className="my-3 listBtn_custom">
                {fields.map((item) => {
                    return (
                        <Btn
                            key={item.id}
                            name={item.value}
                            handleOnClick={handleOnClick}
                            className={item.className}
                        />
                    );
                })}
            </div>
            <TableQues />
        </>
    );
};

export default FilterQues;
