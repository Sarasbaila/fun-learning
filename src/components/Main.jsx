import { useState } from "react";
import questions from "../data/data.js";
import ScorePage from "./ScorePage.jsx";

const Main = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="py-8">
      {showScore ? (
        <ScorePage score={score} totale={questions.length} />
      ) : (
        <section className="block p-6 rounded-lg shadow-lg bg-gray-50 w-10/12 md:w-3/6 mx-auto">
          <h1 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Question {currentQuestion + 1} :
          </h1>
          <h2 className="text-gray-700 text-base mb-4">
            {questions[currentQuestion].questionText}
          </h2>
          <hr className="my-4" />
          <div className="flex items-center justify-evenly flex-row flex-wrap">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                type="button"
                class="inline-block px-6 py-2.5 my-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Main;
