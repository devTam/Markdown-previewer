import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import MarkdownReducer from './Markdown/MarkdownReducer';


const store = createStore(MarkdownReducer, composeWithDevTools())


export default store