import React, { useState } from "react";
import Questions from "./Questions/Questions";
import questionsAndAnswer from "./questionsAndAnswer";

function Quiz() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleClick = () => {
    if (selectedQuestion < questionsAndAnswer.length - 1) {
      setSelectedQuestion(selectedQuestion + 1);
    }
  };

  return (
    <div className="mainQuizWrapper">
      <div className="quizImg" />
      <div className="quizQuestionAndAnswerWrapper">
        <p>
          Généralement, le vin, on aime bien. Mais il est souvent compliqué de
          s’y retrouver parmi toute la diversité de vins existants. Nous allons
          te poser quelques questions afin de définir tes goûts et déduire ton
          profil de dégustation...{" "}
        </p>
        <p>
          {" "}
          Pour chaque question, il faudra choisir au moins une réponse.
          Plusieurs réponses sont possibles.{" "}
        </p>

        <Questions
          question={questionsAndAnswer[selectedQuestion].question}
          answers={questionsAndAnswer[selectedQuestion].answers}
          example={questionsAndAnswer[selectedQuestion].example}
        />
        <button onClick={() => handleClick()} type="button">
          QUESTION SUIVANTE
        </button>
      </div>
    </div>
  );
}

export default Quiz;
