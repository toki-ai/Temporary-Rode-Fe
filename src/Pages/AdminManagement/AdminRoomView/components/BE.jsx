import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { Table } from 'react-bootstrap';

import roomApi from '../../../../utils/api/roomApi';
import PaginationRoom from '../../AdminRoom/components/Pagination';
import DateFormatS from './DateFormartS';

const titlesAll = [
    { id: '0', name: 'Rank' },
    { id: '1', name: 'Name' },
    { id: '2', name: 'Total Score' },
    { id: '3', name: 'Total Execution Time' },
    { id: '4', name: 'Finish at' },
];
const titlesQues = [
    { id: '0', name: 'Rank' },
    { id: '1', name: 'Name' },
    { id: '2', name: 'Score' },
    { id: '3', name: 'Execution Time' },
    { id: '4', name: 'Finish at' },
];
const BE = ({ ques, data, questions, questionId }) => {
    const [question, setQuestion] = useState([]);
    const [questionID, setQuestionID] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    useEffect(() => {
        setQuestion(questions);
        console.log(question);
        setQuestionID(questionId);
    }, [questions, questionId]);
    useEffect(() => {
        roomApi.getSubmitHistoryByQuestion(questionId).then((res) => {
            setAccounts(res.data.data.items);
            setCurrentPage(res.data.data.meta.currentPage);
            setTotalPage(res.data.data.meta.totalPages);
            console.log(res.data.data);
        });
    }, [questionId, questions]);
    console.log(question);
    console.log(questionID);
    console.log(accounts);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <>
            <Table striped className="mt-2 border-top">
                <thead>
                    <tr>
                        {ques == 'All'
                            ? titlesAll.map((item) => {
                                  return (
                                      <th className="fw-bold" key={item.id}>
                                          {item.name}
                                      </th>
                                  );
                              })
                            : titlesQues.map((item) => {
                                  return (
                                      <th className="fw-bold" key={item.id}>
                                          {item.name}
                                      </th>
                                  );
                              })}
                    </tr>
                </thead>
                <tbody>
                    {accounts?.length ? (
                        accounts.map((account, i) => {
                            return (
                                <tr key={account.id}>
                                    <td>{i + 1}</td>
                                    <td>{account.account.lname + ' ' + account.account.fname}</td>
                                    <td>{account.score}</td>
                                    <td>{account.space}</td>
                                    <td>{DateFormatS(account.submittedAt)}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td className="text-center" colSpan={1000}>
                                No data available in table
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <PaginationRoom
                action={handlePageChange}
                totalPages={totalPage}
                currentPage={currentPage}
            />
        </>
    );
};

export default BE;
