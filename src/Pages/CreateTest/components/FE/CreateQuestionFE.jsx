import QuestionFE from "./QuestionFE";

const CreateQuestionFE = ({questions, addQuestion, onSubmitTimeChange, onImageChange}) => {
    return (
        <div>
          <h2>Questions for Class 2</h2>
          {questions.map((q, index) => (
            <QuestionFE
            //question, index, onSubmitTimeChange, onImageChange
              key={index}
              question={q}
              index={index}
              onSubmitTimeChange={onSubmitTimeChange}
              onImageChange={onImageChange}
            />
          ))}
          <button onClick={addQuestion}>Add New Question</button>
        </div>
    );
}

export default CreateQuestionFE;