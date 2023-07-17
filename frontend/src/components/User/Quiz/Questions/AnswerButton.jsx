import React from "react";
import PropTypes from "prop-types";

function AnswerButton({ answer, selectedAnswer, setSelectedAnswer, label }) {
  const handleClick = () => {
    if (!selectedAnswer[label]) {
      selectedAnswer[label] = 1; // eslint-disable-line no-param-reassign
      setSelectedAnswer({ ...selectedAnswer });
    } else {
      selectedAnswer[label] = 0; // eslint-disable-line no-param-reassign
      setSelectedAnswer({ ...selectedAnswer });
    }
  };

  return (
    <button
      type="button"
      id={selectedAnswer[label] ? "clicked" : "notClicked"}
      onClick={() => handleClick()}
      value={answer}
    >
      {answer}
    </button>
  );
}

AnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.shape({}).isRequired,
  setSelectedAnswer: PropTypes.func.isRequired,
};

export default AnswerButton;
