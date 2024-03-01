import React, { useState } from 'react';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    setText(inputText);
    const words = inputText.split(" ");
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (customDictionary.hasOwnProperty(word)) {
        setCorrection(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }
    setCorrection('');
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
        rows={6}
        cols={50}
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default XSpellCheck;
