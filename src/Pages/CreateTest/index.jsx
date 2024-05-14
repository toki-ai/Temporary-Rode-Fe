import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import QuestionForm from './components/QuestionForm';

// const Question_Class1 = ({questions, addQuestion, onQuestionChange, onTestcaseChange, onAddTestcase }) => {
//   return (
//      <div>
//       <h2>Questions for Class 1</h2>
//       {questions.map((q, index) => (
//         <QuestionForm
//           key={index}
//           index={index}
//           question={q.question}
//           testcases={q.testcases}
//           onQuestionChange={onQuestionChange}
//           onTestcaseChange={onTestcaseChange}
//           onAddTestcase={onAddTestcase}
//         />
//       ))}
//       <button onClick={addQuestion}>Add New Question</button>
//     </div>
//   );
// };

const YourComponent = () => {
//   const [savedClass1Questions, setSavedClass1Questions] = useState([]);
//   const [savedClass2Questions, setSavedClass2Questions] = useState([]);
//   const [unsavedClass1Questions, setUnsavedClass1Questions] = useState([]);
//   const [unsavedClass2Questions, setUnsavedClass2Questions] = useState([]);
  const [savedQuestions, setSavedQuestions] = useState({ class1: [], class2: [] });
  const [class1Questions, setClass1Questions] = useState([]);
  const [class2Questions, setClass2Questions] = useState([]);
  const [activeComponent, setActiveComponent] = useState('class1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unsavedClass, setUnsavedClass] = useState('');
//       useEffect(() => {
//     // Fetch class 1 questions from API
//     fetch('api/class1/questions')
//       .then(response => response.json())
//       .then(data => setClass1Questions(data))
//       .catch(error => console.error('Error fetching class 1 questions:', error));
    
//     // Fetch class 2 questions from API
//     fetch('api/class2/questions')
//       .then(response => response.json())
//       .then(data => setClass2Questions(data))
//       .catch(error => console.error('Error fetching class 2 questions:', error));
//   }, []);


//   const handleAddTestcase = (questionIndex) => {
//     const updatedQuestions = activeComponent === 'class1' ? [...unsavedClass1Questions] : [...unsavedClass2Questions];
//     updatedQuestions[questionIndex].testcases.push({ input: '', output: '' });
//     if (activeComponent === 'class1') {
//       setUnsavedClass1Questions(updatedQuestions);
//     } else {
//       setUnsavedClass2Questions(updatedQuestions);
//     }
//   };

//   const addClass1Question = () => {
//     setUnsavedClass1Questions([...unsavedClass1Questions, { question: '', testcases: [{ input: '', output: '' }] }]);
//   };

//   const addClass2Question = () => {
//     setUnsavedClass2Questions([...unsavedClass2Questions, { question: '', testcases: [{ input: '', output: '' }] }]);
//   };

  const addNewQuestion = () => {
    const newQuestion = {
      question: '',
      testcases: [{ input: '', output: '', isHidden: false }],
      img: null,
      submitTime: null
    };
    if (activeComponent === 'class1') {
      setClass1Questions(prevQuestions => [...prevQuestions, newQuestion]);
    } else {
      setClass2Questions(prevQuestions => [...prevQuestions, newQuestion]);
    }
  };

    const addNewTestcase = (questionIndex) => {
    const newTestcase = { input: '', output: '', isHidden: false };
    if (activeComponent === 'class1') {
      setClass1Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].testcases.push(newTestcase);
        return updatedQuestions;
      });
    } else {
      setClass2Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].testcases.push(newTestcase);
        return updatedQuestions;
      });
    }
  };

//   const handleClass1QuestionChange = (index, value) => {
//     const newQuestions = [...unsavedClass1Questions];
//     newQuestions[index].question = value;
//     setUnsavedClass1Questions(newQuestions);
//   };

//   const handleClass2QuestionChange = (index, value) => {
//     const newQuestions = [...unsavedClass2Questions];
//     newQuestions[index].question = value;
//     setUnsavedClass2Questions(newQuestions);
//   };

//   const saveQuestions = () => {
//     if (activeComponent === 'class1') {
//       setSavedClass1Questions([...unsavedClass1Questions]);
//       setUnsavedClass1Questions([...unsavedClass1Questions]); // Reset unsaved questions to the saved ones
//       console.log(savedClass1Questions);
//     } else if (activeComponent === 'class2') {
//       setSavedClass2Questions([...unsavedClass2Questions]);
//       setUnsavedClass2Questions([...unsavedClass2Questions]); // Reset unsaved questions to the saved ones
//       console.log(savedClass2Questions);
//     }
//   };

  const saveQuestions = () => {
    const questionsToSave = activeComponent === 'class1' ? class1Questions : class2Questions;

    // Save questions to the corresponding savedQuestions array
    setSavedQuestions(prevSavedQuestions => {
      const updatedSavedQuestions = { ...prevSavedQuestions };
      updatedSavedQuestions[activeComponent] = questionsToSave;
      return updatedSavedQuestions;
    });

    console.log('Saved Questions:', savedQuestions);
  };

//   const arraysAreEqual = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i].question !== arr2[i].question || arr1[i].output !== arr2[i].output) {
//             return false;
//         }
//     }

//     return true;
// };

//   const handleClass1ButtonClick = () => {
//     if (activeComponent !== 'class1' && !arraysAreEqual(unsavedClass2Questions, savedClass2Questions)) {
//         setUnsavedClass('Class 2');
//         setIsModalOpen(true);
//     } else {
//         setActiveComponent('class1');
//         setUnsavedClass1Questions([...savedClass1Questions]);
//     }
//   };

//   const handleClass2ButtonClick = () => {
//     if (activeComponent !== 'class2' && !arraysAreEqual(unsavedClass1Questions, savedClass1Questions)) {
//         setUnsavedClass('Class 1');
//         setIsModalOpen(true);
//     } else {
//         setActiveComponent('class2');
//         setUnsavedClass2Questions([...savedClass2Questions]);
//     }
//   };

  const closeModal = () => {
    setIsModalOpen(false);
  };

//   const handleTestcaseChange = (questionIndex, testcaseIndex, field, value) => {
//   const updatedQuestions = activeComponent === 'class1' ? [...unsavedClass1Questions] : [...unsavedClass2Questions];
//   updatedQuestions[questionIndex].testcases[testcaseIndex][field] = value;
//   if (activeComponent === 'class1') {
//     setUnsavedClass1Questions(updatedQuestions);
//   } else {
//     setUnsavedClass2Questions(updatedQuestions);
//   }
// };
  const handleTestcaseChange = (questionIndex, testcaseIndex, field, value) => {
    if (activeComponent === 'class1') {
      setClass1Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].testcases[testcaseIndex][field] = value;
        return updatedQuestions;
      });
    } else {
      setClass2Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[questionIndex].testcases[testcaseIndex][field] = value;
        return updatedQuestions;
      });
    }
  };

const handleSubmitTimeChange = (index, time) => {
    if (activeComponent === 'class1') {
      setClass1Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index].submitTime = time;
        return updatedQuestions;
      });
    } else {
      setClass2Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index].submitTime = time;
        return updatedQuestions;
      });
    }
  };

    const handleImageChange = (index, file) => {
    if (activeComponent === 'class1') {
      setClass1Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index].img = file;
        return updatedQuestions;
      });
    } else {
      setClass2Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index].img = file;
        return updatedQuestions;
      });
    }
  };

  const handleQuestionChange = (index, field, value) => {
    if (activeComponent === 'class1') {
      setClass1Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index][field] = value;
        return updatedQuestions;
      });
    } else {
      setClass2Questions(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[index][field] = value;
        return updatedQuestions;
      });
    }
  };

const handleComponentSwitch = (component) => {
    if (activeComponent !== component) {
      const unsavedQuestions = activeComponent === 'class1' ? class1Questions : class2Questions;
      const savedQuestions = activeComponent === 'class1' ? class1Questions : class2Questions;

      if (JSON.stringify(unsavedQuestions) !== JSON.stringify(savedQuestions)) {
        setUnsavedClass(activeComponent === 'class1' ? 'Class 1' : 'Class 2');
        setIsModalOpen(true);
      } else {
        setActiveComponent(component);
      }
    }
  };
  return (
    <div>
      <button onClick={() => handleComponentSwitch('class1')}>Class 1</button>
      <button onClick={() => handleComponentSwitch('class2')}>Class 2</button>
      <button onClick={saveQuestions}>Save</button>

      {activeComponent === 'class1' && (
        <div>
          <h2>Questions for Class 1</h2>
          {class1Questions.map((q, index) => (
            <QuestionForm
              key={index}
              index={index}
              question={q}
              testcases={q.testcases}
              onQuestionChange={handleQuestionChange}
              onTestcaseChange={handleTestcaseChange}
              onAddTestcase={addNewTestcase}
              onImageChange={handleImageChange}
              onSubmitTimeChange={handleSubmitTimeChange}
            />
          ))}
          <button onClick={addNewQuestion}>Add New Question</button>
        </div>
      )}
      {activeComponent === 'class2' && (
        <div>
          <h2>Questions for Class 2</h2>
          {class2Questions.map((q, index) => (
            <QuestionForm
              key={index}
              index={index}
              question={q}
              testcases={q.testcases}
              onQuestionChange={handleQuestionChange}
              onTestcaseChange={handleTestcaseChange}
              onAddTestcase={addNewTestcase}
              onImageChange={handleImageChange}
              onSubmitTimeChange={handleSubmitTimeChange}
            />
          ))}
          <button onClick={addNewQuestion}>Add New Question</button>
        </div>
      )}

      <Dialog open={isModalOpen} onClose={closeModal}>
        <DialogTitle>Unsaved Changes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please save questions for {unsavedClass} before proceeding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default YourComponent;
