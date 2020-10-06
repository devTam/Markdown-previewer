import React, { useState } from 'react'
import './Editor.css'
import { connect } from 'react-redux'
import MarkdownAction from '../redux/Markdown/MarkdownAction'


function Editor(props) {
    const [textValue, setTextValue] = useState(` Paragraph

**bolded text**

# heading
## heading 2
- list item

[google](https://google.com)

Heres some code, \`<div></div>\`, between 2 backticks.

> block quote

codeblock

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

![image](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)
    
    `)
    props.convertMarkdown(textValue)
    return (
        <div className="editor">
           <label htmlFor="editor">Editor</label>
    <textarea id="editor" value={props.text} onChange={e => {
        setTextValue(e.target.value)
        props.convertMarkdown(textValue)
    }}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        convertMarkdown: (unmarked) => dispatch(MarkdownAction(unmarked))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

