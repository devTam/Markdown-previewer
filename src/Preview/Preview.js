import React from 'react'
import './Preview.css';
import { connect } from 'react-redux'
import marked from 'marked';

function Preview(props) {
    marked.setOptions({
        breaks: true
      });
    const markdown = marked(props.text)
    return (
        <div className="preview">
            <h3 className="preview__heading">Preview</h3>
            <div className="preview__content" id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps, null)(Preview)

