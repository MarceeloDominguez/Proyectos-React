import { useState, useEffect } from "react";
import Question from "./components/Question";
import { data } from "./data/data";
import AnswerOptions from "./components/AnswerOptions";
import SelectCategory from "./components/SelectCategory";
import CustomModal from "./components/CustomModal";
import { SpinnerRoundFilled } from "spinners-react";

function App() {
  const allQuestion = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [selectCategory, setSelectCategory] = useState("Geografía");
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  //seleccionar categoria
  const handleCategory = (category: string) => {
    setSelectCategory(category);
    setCurrentOptionSelected("");
    setCorrectOption("");
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    setIsOptionsDisabled(false);
    setLoading(true);
  };

  //filtrar por categoria
  const filterQuestionCategory = allQuestion.filter(
    (item) => item.category === selectCategory
  );

  //validar si la respuesta es correcta o no
  const validateAnswer = (selectedAnswer: string) => {
    let correct_option =
      filterQuestionCategory[currentQuestionIndex]["correct_option"];
    setCorrectOption(correct_option);
    setCurrentOptionSelected(selectedAnswer);
    setIsOptionsDisabled(true);

    if (selectedAnswer === correct_option) {
      setScore(score + 1);
    }

    setShowNextButton(true);
  };

  //pasar a la siguiente pregunta
  const handleNext = () => {
    if (currentQuestionIndex === filterQuestionCategory.length - 1) {
      setShowModal(true);
      setShowNextButton(false);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected("");
      setCorrectOption("");
      setIsOptionsDisabled(false);
    }
  };

  //reiniciar el juego
  const resetQuiz = () => {
    setShowModal(false);
    setCurrentQuestionIndex(0);
    setCurrentOptionSelected("");
    setCorrectOption("");
    setScore(0);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
  };

  //quitar loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, [selectCategory]);

  return (
    <div className="bg-gray-950">
      <div className="container mx-auto h-screen flex flex-col justify-between">
        <div>
          <SelectCategory
            handleCategory={handleCategory}
            selectCategory={selectCategory}
          />
          {loading ? (
            <div className="h-[90vh] flex justify-center">
              <SpinnerRoundFilled color="white" />
            </div>
          ) : (
            <>
              <Question
                allQuestion={filterQuestionCategory}
                currentQuestionIndex={currentQuestionIndex}
              />
              <AnswerOptions
                allQuestion={filterQuestionCategory}
                currentQuestionIndex={currentQuestionIndex}
                validateAnswer={validateAnswer}
                currentOptionSelected={currentOptionSelected}
                correctOption={correctOption}
                isOptionsDisabled={isOptionsDisabled}
              />
            </>
          )}
        </div>
        {showNextButton && (
          <div>
            <div className="flex justify-end mb-10 max-w-xl mx-auto">
              <button
                disabled={currentOptionSelected !== "" ? false : true}
                className={`${
                  currentOptionSelected !== "" ? "opacity-100" : "opacity-70"
                }  bg-orange-600 px-5 py-2 rounded-lg font-semibold tracking-[0.5px] text-sm`}
                onClick={handleNext}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
      <CustomModal
        showModal={showModal}
        resetQuiz={resetQuiz}
        score={score}
        allQuestion={filterQuestionCategory}
      />
    </div>
  );
}

export default App;
