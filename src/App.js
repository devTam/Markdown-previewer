import React from 'react';
import './App.css';
import Editor from './Editor/Editor'
import Previewer from './Previewer/Previewer'

function App() {
  return (
    <div className="App">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
