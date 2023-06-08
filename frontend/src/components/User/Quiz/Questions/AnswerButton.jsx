import React from "react";
import PropTypes from "prop-types";

function AnswerButton({ answer }) {
  return <button type="button">{answer}</button>;
}

AnswerButton.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default AnswerButton;
