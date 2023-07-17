import React from "react";
import PropTypes from "prop-types";
import AnswerButton from "./AnswerButton";

function Questions({
  question,
  answers,
  example,
  selectedAnswer,
  setSelectedAnswer,
}) {
  return (
    <>
      <p className="quizQuestion"> {question} </p>
      <div className="answerButtonWrapper">
        {answers.map((answer) => {
          return (
            <AnswerButton
              answer={answer.answer}
              key={answer.answer}
              label={answer.label}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          );
        })}
      </div>
      {example && <p>{example}</p>}
    </>
  );
}

Questions.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string, PropTypes.string)
  ).isRequired,
  example: PropTypes.string,
  selectedAnswer: PropTypes.shape({}).isRequired,
  setSelectedAnswer: PropTypes.func.isRequired,
};

Questions.defaultProps = {
  example: "",
};

export default Questions;
