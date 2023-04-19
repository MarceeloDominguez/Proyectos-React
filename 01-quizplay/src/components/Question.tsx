import { Quiz } from "../interface/quizInterface";

type Props = {
  allQuestion: Quiz[];
  currentQuestionIndex: number;
};

export default function Question({ currentQuestionIndex, allQuestion }: Props) {
  return (
    <div className="text-start max-w-xl mx-auto py-5">
      <span className="font-bold text-slate-200">
        {currentQuestionIndex + 1}/{allQuestion.length}
      </span>
      <p className="text-slate-200 font-semibold text-xl tracking-[0.5px]">
        {allQuestion[currentQuestionIndex].question}
      </p>
    </div>
  );
}
