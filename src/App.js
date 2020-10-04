import React from 'react';
import './App.css';
import Editor from './Editor/Editor'
import Previewer from './Previewer/Previewer'

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
