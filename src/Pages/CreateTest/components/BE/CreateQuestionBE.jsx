import QuestionBE from "./QuestionBE";

const CreateQuestionBE = ({questions, addQuestion, onSubmitTimeChange, onTestcaseChange, onImageChange, onAddTestcase}) => {
    return (
        <div>
          <h2>Questions for Class 2</h2>
          {questions.map((q, index) => (
            <QuestionBE
            //question, index, onSubmitTimeChange, onTestcaseChange, onImageChange, onAddTestcase
              key={index}
              question={q}
              index={index}
              onSubmitTimeChange={onSubmitTimeChange}
              onTestcaseChange={onTestcaseChange}
              onImageChange={onImageChange}
              onAddTestcase={onAddTestcase}
            />
          ))}
          <button onClick={addQuestion}>Add New Question</button>
        </div>
    );
}

export default CreateQuestionBE;