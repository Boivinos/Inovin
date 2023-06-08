import React from "react";
import PropTypes from "prop-types";
import AnswerButton from "./AnswerButton";

function Questions({ question, answers, example }) {
  return (
    <>
      <p className="quizQuestion"> {question} </p>
      <div className="answerButtonWrapper">
        {answers.map((answer) => {
          return <AnswerButton answer={answer.answer} />;
        })}
      </div>
      {example && <p>{example}</p>}
    </>
  );
}

Questions.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.shape([]).isRequired,
  example: PropTypes.string,
};

Questions.defaultProps = {
  example: "",
};

export default Questions;
