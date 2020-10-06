import CONVERT_MARKDOWN from './MarkdownType';

const MarkdownAction = (unmarked) => {
    return {
        type: CONVERT_MARKDOWN,
        payload: unmarked
    }
}
export default MarkdownAction