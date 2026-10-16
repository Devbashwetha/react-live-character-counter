import React from 'react'

function Input({ text, onTextChange }) {
  return (
    <textarea
      className="text-input"
      value={text}
      onChange={(event) => onTextChange(event.target.value)}
      placeholder="Type something..."
    />
  )
}

export default Input