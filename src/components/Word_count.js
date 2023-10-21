import React, { useState } from 'react';
import './Word_count.css';

const Word_count = () => {
    const [text, setText] = useState('');
    const words = text.split(/\s+/).filter(word => word !== '');
  
    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    return (
      <div className="word-counter">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          rows="6"
          cols="50"
          placeholder="Enter text here..."
          onChange={handleTextChange}
          value={text}
        />
  
        <p >
          Word Count: <strong>{words.length}</strong>
        </p>
      </div>
    );
};

export default Word_count;
