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
    { id: '2', name: 'Total Lines of Code' },
    { id: '3', name: 'Total Score' },
    { id: '4', name: 'Finish at' },
];
const titlesQues = [
    { id: '0', name: 'Rank' },
    { id: '1', name: 'Name' },
    { id: '2', name: 'Match' },
    { id: '3', name: 'Lines of Code' },
    { id: '4', name: 'Score' },
    { id: '5', name: 'Finish at' },
];
const FE = ({ ques, roomId, questions, questionId }) => {
    const [question, setQuestion] = useState([]);
    const [questionID, setQuestionID] = useState('All');
    const [accounts, setAccounts] = useState([]);
    const [accountsAll, setAccountsAll] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPageAll, setCurrentPageAll] = useState(1);
    const [totalPageAll, setTotalPageAll] = useState(1);
    useEffect(() => {
        setQuestion(questions);
        setQuestionID(questionId);
    }, [questions, questionId]);
    useEffect(() => {
        roomApi.getSubmitHistoryByQuestion(questionId).then((res) => {
            setAccounts(res.data.data.items);
            setCurrentPage(res.data.data.meta.currentPage);
            setTotalPage(res.data.data.meta.totalPages);
        });
    }, [questionId, questions]);
    useEffect(() => {
        roomApi.getSubmitHistoryByRoom(roomId).then((res) => {
            setAccountsAll(res.data.data.items);
            setCurrentPageAll(res.data.data.meta.currentPage);
            setTotalPageAll(res.data.data.meta.totalPages);
        });
    }, [roomId, questions, question, questionID]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    console.log(accounts);
    return (
        <>
            <Table striped className="mt-2 border-top">
                <thead>
                    <tr>
                        {questionId == 'All'
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
                    {questionId == 'All' ? (
                        accountsAll?.length ? (
                            accountsAll.map((account, i) => {
                                return (
                                    <tr key={account.id}>
                                        <td>{i + 1}</td>
                                        <td>{account.account.fullname}</td>
                                        <td>{account.totalScore}</td>
                                        <td>{account.totalSpace}</td>
                                        <td>{DateFormatS(account.finishTime)}</td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td className="text-center" colSpan={1000}>
                                    No data available in table
                                </td>
                            </tr>
                        )
                    ) : accounts?.length ? (
                        accounts.map((account, i) => {
                            return (
                                <tr key={account.id}>
                                    <td>{i + 1}</td>
                                    <td>{account.account.lname + ' ' + account.account.fname}</td>
                                    <td>{account.score}</td>
                                    <td>{account.space}</td>
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
            {questionId == 'All' ? (
                parseInt(totalPageAll) > 1 || accountsAll?.length ? (
                    <PaginationRoom
                        action={handlePageChange}
                        totalPages={totalPageAll}
                        currentPage={currentPageAll}
                    />
                ) : null
            ) : parseInt(totalPage) > 1 || accounts?.length ? (
                <PaginationRoom
                    action={handlePageChange}
                    totalPages={totalPage}
                    currentPage={currentPage}
                />
            ) : null}
        </>
    );
};

export default FE;
