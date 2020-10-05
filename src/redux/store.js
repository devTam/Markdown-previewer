import { createStore } from 'redux'
import MarkdownReducer from './Markdown/MarkdownReducer';
import MarkdownAction from './Markdown/MarkdownAction'

const store = createStore(MarkdownReducer)
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(MarkdownAction())
unsubscribe()

export default store