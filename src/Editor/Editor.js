import React, { useState } from 'react'
import './Editor.css'
import { connect } from 'react-redux'
import MarkdownAction from '../redux/Markdown/MarkdownAction'


function Editor(props) {
    props.convertMarkdown(props.text)
    return (
        <div className="editor">
           <label htmlFor="editor">Editor</label>
    <textarea id="editor" value={props.text} onChange={e => {
        const value = e.target.value
        props.convertMarkdown(value)
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

