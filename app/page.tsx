'use client'
import React, { useState } from 'react';

function TextInput() {
  // Declare a state variable called "text" and a function to update it called "setText"
  const [text, setText] = useState('');

  // Event handler function to update the "text" state variable when input changes
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      {/* Render an input field */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {/* Render a paragraph to display the current value of "text" */}
      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInput;
