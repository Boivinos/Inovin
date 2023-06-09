
import React, { useState } from "react";
import PropTypes from "prop-types";

function AnswerButton({ answer, selectedAnswer, setSelectedAnswer, label }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    if (!isClicked && e.target.value === answer) {
      setIsClicked(true);
      selectedAnswer[label] = 1; // eslint-disable-line no-param-reassign
      setSelectedAnswer({ ...selectedAnswer });
    } else if (e.target.value === answer) {
      setIsClicked(false);
      selectedAnswer[label] = 0; // eslint-disable-line no-param-reassign
      setSelectedAnswer({ ...selectedAnswer });
    }
  };

  return (
    <button
      type="button"
      id={isClicked ? "clicked" : "notClicked"}
      onClick={(e) => handleClick(e)}
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
