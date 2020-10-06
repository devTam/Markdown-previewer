import CONVERT_MARKDOWN from './MarkdownType';


const initial_state = {
    text: `Paragraph

**bolded text**
    
# heading
## heading 2
- list item
    
[google](https://google.com)
    
Heres some code, \`<div></div>\`, between 2 backticks.
    
> block quote
    
    
\`\`\`
// this is multi-line code:
    
function anotherExample
(firstLine, lastLine) {
    if (firstLine == 
        '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`
    
![image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
        
     `
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