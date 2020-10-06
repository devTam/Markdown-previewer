import React from 'react';
import './App.css';
import Editor from './Editor/Editor'
import Previewer from './Preview/Preview'
import store from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="App__heading">Markdown Previewer</h1>
        <div className="App__layout">
        <Editor />
        <Previewer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
