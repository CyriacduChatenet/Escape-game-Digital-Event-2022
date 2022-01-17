import './Question.scss';

export const Question = ({children, question}) => {
    return (
        <div className="Question">
            <h2 className="question-title">{question}</h2>
            {children}
        </div>
    )
}