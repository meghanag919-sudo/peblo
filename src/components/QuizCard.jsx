import React, { useState, useEffect } from 'react';
import AnswerButton from "./AnswerButton";
import './QuizCard.css';

function QuizCard({ quiz, checkAnswer, message, quizNumber, totalQuestions, storyTitle }) {
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  // Reset incorrect guesses when the question changes
  useEffect(() => {
    setIncorrectGuesses([]);
  }, [quiz]);

  const handleOptionClick = (option) => {
    if (option !== quiz.answer) {
      setIncorrectGuesses(prev => {
        if (prev.includes(option)) return prev;
        return [...prev, option];
      });
    }
    checkAnswer(option);
  };

  const progressPercent = (quizNumber / totalQuestions) * 100;

  return (
    <div className="quiz-card card">
      <div className="quiz-header">
        <span className="quiz-badge">Quiz for {storyTitle}</span>
        <span className="spacer" />
        <span className="quiz-progress-text">Question {quizNumber} of {totalQuestions}</span>
      </div>

      {/* Duolingo-style Progress Bar */}
      <div className="quiz-progress-bar-container">
        <div 
          className="quiz-progress-bar-fill" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <h2 className="quiz-question">{quiz.question}</h2>

      <div className="options-grid">
        {quiz.options.map((option, index) => {
          let status = 'default';
          if (incorrectGuesses.includes(option)) {
            status = 'incorrect';
          }
          return (
            <AnswerButton 
              key={index} 
              option={option} 
              onClick={handleOptionClick} 
              status={status}
            />
          );
        })}
      </div>

      {message && (
        <div className={`quiz-feedback-banner ${message.includes('Success') ? 'success-banner' : 'error-banner'}`}>
          <span className="feedback-emoji">
            {message.includes('Success') ? '🎉' : '💡'}
          </span>
          <p className="feedback-text">{message}</p>
        </div>
      )}
    </div>
  );
}

export default QuizCard;