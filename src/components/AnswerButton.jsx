import React from 'react';
import Button from './Button';

export default function AnswerButton({ option, onClick, status = 'default' }) {
  let variant = 'secondary';
  if (status === 'correct') variant = 'success';
  if (status === 'incorrect') variant = 'danger';

  return (
    <Button
      variant={variant}
      className={`option-btn ${status !== 'default' ? status : ''}`}
      onClick={() => onClick && onClick(option)}
      aria-label={`Answer ${option}`}
    >
      {option}
      {status === 'correct' && ' ✨'}
      {status === 'incorrect' && ' ❌'}
    </Button>
  );
}
