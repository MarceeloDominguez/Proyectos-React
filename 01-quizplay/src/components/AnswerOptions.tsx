import { AiOutlineCheck } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { Quiz } from "../interface/quizInterface";

type Props = {
  allQuestion: Quiz[];
  currentQuestionIndex: number;
  validateAnswer: (selectedAnswer: string) => void;
  currentOptionSelected: string;
  correctOption: string;
  isOptionsDisabled: boolean;
};

export default function AnswerOptions({
  allQuestion,
  currentQuestionIndex,
  validateAnswer,
  currentOptionSelected,
  correctOption,
  isOptionsDisabled,
}: Props) {
  return (
    <div>
      <div className="max-w-xl mx-auto mt-10">
        {allQuestion[currentQuestionIndex].options.map((item, index) => {
          return (
            <div
              style={
                isOptionsDisabled
                  ? { pointerEvents: "none", opacity: "0.7" }
                  : {}
              }
              key={index}
              onClick={() => validateAnswer(item)}
              className={`${
                item === correctOption
                  ? "bg-green-800"
                  : item === currentOptionSelected
                  ? "bg-red-800"
                  : "bg-stone-800"
              } ${
                item === correctOption
                  ? "border-green-500"
                  : item === currentOptionSelected
                  ? "border-red-500"
                  : "border-stone-600"
              } my-4 py-4 px-2 rounded-lg border-2 relative flex items-center`}
            >
              <span className="font-semibold tracking-[0.5px] text-slate-200">
                {item}
              </span>
              {item === correctOption ? (
                <div className="absolute right-4 bg-green-500 w-7 h-7 flex items-center justify-center rounded-full">
                  <AiOutlineCheck color="#fff" size={19} />
                </div>
              ) : item === currentOptionSelected ? (
                <div className="absolute right-4 bg-red-500 w-7 h-7 flex items-center justify-center rounded-full">
                  <GrAdd color="#fff" size={16} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
