import React from "react";
import { AnswerObject } from "../App";

interface PropType {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNo: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<PropType> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNo} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          {/* The double exclamation point(!!), or double bang, converts a truthy or falsy value to “true” or “false”. In other words, it operates exactly like Boolean(value) would. */}

          {/* <button disabled={!!userAnswer} value={answer} onClick={callback}>  */}
                                    {/* is similar to  */}
          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
          
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
