import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CreateQuestionBE from './components/BE/CreateQuestionBE';
import CreateQuestionFE from './components/FE/CreateQuestionFE';

const UnitTest = () => {
//    useEffect(() => {
//     fetch('api/questions/BE')
//       .then(response => response.json())
//       .then(data => setBEQuestions(data))
//       .catch(error => console.error('Error fetching class 1 questions:', error));
//     fetch('api/questions/FE')
//       .then(response => response.json())
//       .then(data => setFEQuestions(data))
//       .catch(error => console.error('Error fetching class 2 questions:', error));
//   }, []);
    const [savedQuestions, setSavedQuestions] = useState({ BE: [], FE: [] });
}

export default UnitTest;