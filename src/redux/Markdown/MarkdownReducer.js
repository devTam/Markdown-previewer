import CONVERT_MARKDOWN from './MarkdownType';


const initial_state = {
    text: ''
}

const MarkdownReducer = (state = initial_state, action) => {
    switch(action.type) {
        case CONVERT_MARKDOWN:
            return {
                ...state,
                text: action.payload
                
            }
        
        default: return state
    }
}

export default MarkdownReducer;