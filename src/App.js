import Divider from "./images/pattern-divider-desktop.svg";
import Dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data.slip);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-[#313a49] w-[540px] h-[331px] text-white text-center p-6 flex flex-col  justify-center gap-5 items-center rounded-xl">
        <span className="text-[#52fea8] uppercase font-bold tracking-widest">
          {`Advice #${quotes.id}`}
        </span>
        <h1 className="font-bold text-xl text-[#cce4e8]">{quotes.advice}</h1>
        <img src={Divider} alt="divider" />
        <button
          type="button"
          title="Dice new quote"
          className="fixed top-[66%] rounded-full bg-[#53ffab] p-4"
        >
          <img
            src={Dice}
            alt="Dice"
            className="inline-block"
            onClick={fetchAdvice}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
