import CONVERT_MARKDOWN from './MarkdownType';
import marked from 'marked';

const initial_state = {
    text: 'Hello bae',
    markdown: ''
}

const MarkdownReducer = (state = initial_state, action) => {
    switch(action.type) {
        case CONVERT_MARKDOWN:
            return {
                ...state,
                markdown: marked(state.text)
            }
        
        default: return state
    }
}

export default MarkdownReducer;