import './Question.scss';

export const Question = ({children, question, questionText}) => {
    return (
        <div className="Question">
            <h2 className="question-title">{question}</h2>
            <div className="bottom_border"></div>
            <p className="question-text">{questionText}</p>
            {children}
        </div>
    )
}