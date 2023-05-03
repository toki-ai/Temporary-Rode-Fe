import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import submitHistoryApi from '../../../../utils/api/submitHistoryApi';
import {
    HeaderSubmission,
    SubmissionStyled,
    TableSubmission,
    TitleSubmission,
    TableSubmitted,
    AnswerSubmitted,
} from './styled';

import Table from 'react-bootstrap/Table';

const Submission = () => {
    const numQues = [];
    const roomInfo = useLoaderData();
    const arrQuestion = roomInfo.questions.map((item, index) => {
        return {
            index: index + 1,
            id: item.id,
        };
    });

    const [dataSubmission, setDataSubmission] = useState([]);
    const [viewResult, setViewResult] = useState(false);
    const [answer, setAnswer] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const res = {
                roomId: roomInfo.id,
            };
            submitHistoryApi.getInfoSubmission(res).then((res) => {
                setDataSubmission(res.data.data);
            });
        };
        fetchData();
    }, []);
    const handleView = (submissions) => {
        setAnswer(submissions);
        setViewResult(true);
    };
    const numQuestion = () => {
        dataSubmission.map((item) => {
            arrQuestion.map((question) => {
                if (question.id.includes(item.question.id)) {
                    numQues.push(question.index);
                }
            });
        });
    };
    numQuestion();
    return (
        <SubmissionStyled>
            <Row sm={12} md={12} lg={12} className="submission-wrap w-100">
                <HeaderSubmission>
                    <TitleSubmission>Submission</TitleSubmission>
                </HeaderSubmission>
                <Row className="m-0">
                    <TableSubmission className="tableSubmit">
                        <Table striped hover className="mb-0">
                            <div className="wrap">
                                <table className="head">
                                    <tbody>
                                        <tr>
                                            <td>Question</td>
                                            <td>Result</td>
                                            <td>Score</td>
                                            <td>Language</td>
                                            <td>Time</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="scroll-table">
                                    <table>
                                        {dataSubmission?.map((item, index) => (
                                            <tbody key={index} className="">
                                                <tr
                                                    className={
                                                        index % 2 != 0 ? 'bg-even' : 'bg-old'
                                                    }
                                                >
                                                    <td>{numQues[index]}</td>
                                                    {item.time ? (
                                                        <td className="accepted">
                                                            <i class="bi bi-check2-circle"></i>{' '}
                                                            Accepted
                                                        </td>
                                                    ) : (
                                                        <td className="error">
                                                            <i class="bi bi-x-circle"></i>{' '}
                                                            Compilation error
                                                        </td>
                                                    )}
                                                    <td>{item.score}</td>
                                                    <td>{item.language}</td>
                                                    {item.time ? (
                                                        <td>{item.time} ms</td>
                                                    ) : (
                                                        <td>__</td>
                                                    )}
                                                    <td
                                                        className="viewResult"
                                                        onClick={() => handleView(item.submissions)}
                                                    >
                                                        <a>View Results</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </Table>
                    </TableSubmission>
                </Row>
                <Row>
                    {viewResult && (
                        <TableSubmitted>
                            <div className="heading">
                                submitted code
                                <i
                                    class="bi bi-x-square-fill"
                                    onClick={() => setViewResult(false)}
                                ></i>
                            </div>
                            <AnswerSubmitted>
                                <div className="text-white">Language C</div>
                                <span className="answer">{answer}</span>
                            </AnswerSubmitted>
                        </TableSubmitted>
                    )}
                </Row>
                {/* <PaginationLB>
            <PaginationLeaderboard />
        </PaginationLB> */}
            </Row>
        </SubmissionStyled>
    );
};

export default Submission;
