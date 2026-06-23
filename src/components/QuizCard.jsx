import AnswerButton from "./AnswerButton";

function QuizCard({ quiz, checkAnswer, message, quizNumber, totalQuestions, storyTitle }) {
  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <span className="quiz-badge">Quiz for {storyTitle}</span>
      </div>
      <div className="quiz-header" style={{ marginTop: 10 }}>
        <span className="quiz-badge">Question {quizNumber} of {totalQuestions}</span>
      </div>
      <h2 style={{ margin: '8px 0 16px 0', color: '#073b4c' }}>{quiz.question}</h2>

      <div className="options-grid">
        {quiz.options.map((option, index) => (
          <AnswerButton key={index} option={option} onClick={checkAnswer} />
        ))}
      </div>

      {message && (
        <div style={{ marginTop: 12 }} className={message.includes('Success') ? 'success-msg' : 'error-msg'}>
          {message}
        </div>
      )}
    </div>
  );
}

export default QuizCard;