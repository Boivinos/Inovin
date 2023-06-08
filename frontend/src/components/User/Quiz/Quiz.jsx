import React, { useState } from "react";
import Questions from "./Questions/Questions";
import questionsAndAnswer from "./questionsAndAnswer";

function Quiz() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const handleClick = () => {
    if (selectedQuestion < questionsAndAnswer.length - 1) {
      setSelectedQuestion(selectedQuestion + 1);
    }
  };

  console.warn(selectedAnswer);

  return (
    <div className="quizPage">
      <div className="mainQuizWrapper">
        <div className="quizImg" />
        <div className="quizQuestionAndAnswerWrapper">
          <p>
            Généralement, le vin, on aime bien. Mais il est souvent compliqué de
            s’y retrouver parmi toute la diversité de vins existants. Nous
            allons te poser quelques questions afin de définir tes goûts et
            déduire ton profil de dégustation... <br />
            <br />
            Pour chaque question, il faudra choisir au moins une réponse.
            Plusieurs réponses sont possibles.
          </p>

          <Questions
            question={questionsAndAnswer[selectedQuestion].question}
            answers={questionsAndAnswer[selectedQuestion].answers}
            example={questionsAndAnswer[selectedQuestion].example}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <button
            onClick={() => handleClick()}
            type="button"
            className="questionSuivanteBouton"
          >
            QUESTION SUIVANTE
          </button>
        </div>
      </div>
      <div className="quizFooter">
        <p>Passer le questionnaire</p>
        <p>{selectedQuestion + 1}/4</p>
      </div>
    </div>
  );
}

export default Quiz;
