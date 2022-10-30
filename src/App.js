import Divider from "./images/pattern-divider-desktop.svg";
import Dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState(0);

  const fetchAdvice = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        let dataQuotes = data;

        let randomNumber = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNumber];

        setQuotes(randomQuote.text);
        setNumber(randomNumber);
        setAuthor(randomQuote.author);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-[#313a49] w-[540px] h-[331px] text-white text-center p-6 flex flex-col  justify-center gap-5 items-center rounded-xl">
        <span className="text-[#52fea8] uppercase font-bold tracking-widest flex gap-2">
          <span>{`Advice #${number}`}</span>

          <span>{author ? author : "No Author"}</span>
        </span>

        <h1 className="font-bold text-xl text-[#cce4e8]">{`"${quotes}"`}</h1>

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
