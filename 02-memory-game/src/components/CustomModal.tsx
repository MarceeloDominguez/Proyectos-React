import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

type Props = {
  playerWin: boolean;
  resetGame: () => void;
  error: number;
};

export default function CustomModal({ playerWin, resetGame, error }: Props) {
  return (
    <Modal
      open={playerWin || error === 7 ? true : false}
      onClose={() => false}
      showCloseIcon={false}
      center
    >
      <div className="w-96 max-sm:max-w-[300px]">
        <h2 className="text-center pb-2 font-rubik text-2xl tracking-[0.5px]">
          {playerWin ? "Felicitaciones!" : "Oops!"}
        </h2>
      </div>
      <div className="flex justify-center py-2 pt-5">
        <button
          onClick={resetGame}
          className="bg-orange-600 px-5 py-2 rounded-md font-rubik tracking-[0.5px] text-sm"
        >
          Reiciniar
        </button>
      </div>
    </Modal>
  );
}
