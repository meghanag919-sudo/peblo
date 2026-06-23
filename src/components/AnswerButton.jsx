import React from 'react'

export default function AnswerButton({ option, onClick }) {
  return (
    <button
      className="option-btn"
      onClick={() => onClick && onClick(option)}
      aria-label={`Answer ${option}`}
    >
      {option}
    </button>
  )
}
