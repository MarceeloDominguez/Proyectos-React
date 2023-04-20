import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Quiz } from "../interface/quizInterface";

type Props = {
  showModal: boolean;
  resetQuiz: () => void;
  score: number;
  allQuestion: Quiz[];
};

export default function CustomModal({
  showModal,
  resetQuiz,
  score,
  allQuestion,
}: Props) {
  return (
    <Modal open={showModal} onClose={resetQuiz} showCloseIcon={false} center>
      <div className="w-96 max-sm:max-w-[300px]">
        <h2 className="text-center pb-2 font-semibold text-2xl tracking-[0.5px]">
          {score > allQuestion.length / 2 ? "Felicitaciones!" : "Oops!"}
        </h2>
        <h2 className="text-center font-semibold text-md">
          {score}/{allQuestion.length}
        </h2>
      </div>
      <div className="flex justify-center py-2 pt-5">
        <button
          onClick={resetQuiz}
          className="bg-orange-600 px-5 py-2 rounded-md font-semibold tracking-[0.5px] text-sm"
        >
          Reiciniar
        </button>
      </div>
    </Modal>
  );
}
