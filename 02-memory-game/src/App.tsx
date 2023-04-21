import { useEffect, useState } from "react";
import CustomModal from "./components/CustomModal";
import { shuffle } from "./helpers/shuffle";

const cardsArray = ["🐷", "👻", "⚽", "🔑", "🍩", "🥑", "🐶", "🏀"];

function App() {
  const [cards, setCards] = useState(() =>
    shuffle([...cardsArray, ...cardsArray])
  );
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(0);

  useEffect(() => {
    if (selectedCards.length < 2) return;

    if (cards[selectedCards[0]] === cards[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
      setScore(score + 10);
    } else {
      setError(error + 1);
      //si no acierta se vuelven a dar vuelta las tarjetas
      const timeoutId = setTimeout(() => setSelectedCards([]), 800);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const handleTapCard = (index: number) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
  };

  //si acerto todo es true
  const playerWin = () => matchedCards.length === cards.length;

  //reiniciar el juego
  const resetGame = () => {
    setMatchedCards([]);
    setSelectedCards([]);
    setScore(0);
    setError(0);
    setCards(() => shuffle([...cardsArray, ...cardsArray]));
  };

  return (
    <div className="bg-[#1B2430] h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <h1 className="text-violet-400 text-center text-4xl max-sm:text-3xl tracking-[0.5px] mb-8 max-sm:mb-16 font-rubik">
          Memory Game
        </h1>
        <div className="flex flex-row justify-between max-w-xl max-sm:max-w-[350px] mx-auto mb-8">
          <span className="text-slate-200  tracking-[1px] font-rubik">
            Error: {error} / 7
          </span>
          <span className="text-slate-200 tracking-[1px] font-rubik">
            Score: {score}
          </span>
        </div>
        <div className="max-w-xl max-sm:max-w-[350px] mx-auto grid grid-cols-4 gap-6 max-sm:gap-3">
          {cards.map((item, index) => {
            const isTurnedOver =
              selectedCards.includes(index) || matchedCards.includes(index);

            return (
              <div
                key={index}
                onClick={() => handleTapCard(index)}
                className="bg-gray-800 h-[120px] max-sm:h-[95px] shadow-xl flex items-center justify-center rounded-lg"
              >
                {isTurnedOver ? (
                  <span className="text-4xl">{item}</span>
                ) : (
                  <span className="text-4xl text-violet-400 font-bold">?</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <CustomModal
        playerWin={playerWin()}
        resetGame={resetGame}
        error={error}
      />
    </div>
  );
}

export default App;
