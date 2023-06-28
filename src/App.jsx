// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { buttons } from "./data/buttons";
import { cards } from "./data/cards";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="bg-[#1e1e20] px-10 py-20 lg:px-[100px] text-white">
      <article className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left mb-16">
        <div className="self-center">
          <h1 className="text-transparent text-5xl font-bold mb-3 bg-gradient-to-br from-[#67b7ff] from-10% via-[#bd34fe] via-50% to-[#bd34fe] bg-clip-text">
            Vite
          </h1>
          <h2 className="text-5xl font-bold text-[#dfdfd7] mb-3 ">
            Next Generation Frontend Tooling
          </h2>
          <p className="text-2xl mb-9 text-[#9999a0]">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
          <div>
            {buttons.map((button, index) => {
              return (
                <button
                  key={`button-${index}`}
                  className={
                    index === 0
                      ? "rounded-full bg-indigo-500 px-4 py-2 mr-3 hover:bg-[#9499ff]"
                      : "rounded-full bg-[#313136] px-4 py-2 mr-3 hover:bg-[#2c2c30]"
                  }
                >
                  {button}
                </button>
              );
            })}
          </div>
        </div>
        <div className="">
          <img
            className="w-[320px] mx-auto"
            src="https://vitejs.dev/logo-with-shadow.png"
            alt=""
          />
        </div>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => {
          return (
            <Card
              key={`key-${index}`}
              emoji={card.emoji}
              head={card.head}
              content={card.content}
            />
          );
        })}
      </article>
    </main>
  );
}

export default App;
