import React, { useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import API from "../../Contexts/api";
import Questions from "./Questions/Questions";
import questionsAndAnswer from "./questionsAndAnswer";
import UserContext from "../../Contexts/UserContext";

function Quiz() {
  const { user } = useContext(UserContext);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({
    userID: user?.id,
    red: 0,
    white: 0,
    fruity: 0,
    floral: 0,
    spicy: 0,
    vegetal: 0,
    wooded: 0,
    acid: 0,
    bitter: 0,
    sugar: 0,
    alcool: 0,
    short: 0,
    medium: 0,
    intense: 0,
  });

  const location = useLocation();
  const userOrigin = location.state?.isFirstConnection;
  const navigate = useNavigate();
  const handleClick = (button) => {
    if (
      button === "suivant" &&
      selectedQuestion < questionsAndAnswer.length - 1
    ) {
      setSelectedQuestion(selectedQuestion + 1);
    }
    if (button === "precedant" && selectedQuestion > 0) {
      setSelectedQuestion(selectedQuestion - 1);
    }
    if (button === "terminer") {
      API.post("http://localhost:8000/api/selection", selectedAnswer)
        .then(() => {
          navigate("/profil?isFromQuiz=true");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="quizPage">
      <div className="mainQuizWrapper">
        <div className="quizImg" />
        <div className="quizQuestionAndAnswerWrapper">
          {userOrigin && selectedQuestion === 0 && (
            <p className="inscription">
              Merci de ton inscription {user && user.firstname} !{" "}
            </p>
          )}
          {selectedQuestion === 0 && (
            <p>
              Nous allons à présent te poser quelques questions afin de définir
              tes goûts et déduire ton profil de dégustation... <br />
              <br />
              Pour chaque question, il faudra choisir au moins une réponse.
              Plusieurs réponses sont possibles.
            </p>
          )}

          <Questions
            question={questionsAndAnswer[selectedQuestion].question}
            answers={questionsAndAnswer[selectedQuestion].answers}
            example={questionsAndAnswer[selectedQuestion].example}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <div className="buttonWrapper">
            {selectedQuestion > 0 && (
              <button
                onClick={() => handleClick("precedant")}
                type="button"
                className="questionSuivanteBouton"
              >
                QUESTION PRECEDENTE
              </button>
            )}
            {selectedQuestion < 3 && (
              <button
                onClick={() => handleClick("suivant")}
                type="button"
                className="questionSuivanteBouton"
              >
                QUESTION SUIVANTE
              </button>
            )}
            {selectedQuestion === 3 && (
              <button
                onClick={() => handleClick("terminer")}
                type="button"
                className="questionSuivanteBouton"
              >
                TERMINER LE QUIZZ
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="quizFooter">
        <NavLink to="/profil" className="link">
          <p>Passer le questionnaire</p>
        </NavLink>
        <p>{selectedQuestion + 1}/4</p>
      </div>
    </div>
  );
}

export default Quiz;
