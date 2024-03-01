import React from 'react';
import ReactDOM from 'react-dom';
import XSpellCheck from './XSpellCheck';
import './App.css';


export const App = () => {
  return (
    <div>
      <h1>Spell Check and Auto-Correction </h1>
      <XSpellCheck />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
