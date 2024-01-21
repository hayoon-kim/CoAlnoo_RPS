import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://www.thoughtco.com/thmb/Uh06xuGPA6HKNbaxpNsOjR7CjPY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rhyolite-1057171452-5c911d4b46e0fb000187a397.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.imweb.me/thumbnail/20200514/7fc8b1411fa8d.png",
  },
  paper: {
    name: "Paper",
    img: "https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/white-card/.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [comResult, setComResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    let _result = judgement(choice[userChoice], computerChoice);

    setUserResult(_result);
    if (_result == "tie") {
      setComResult("tie");
    } else {
      _result === "WIN" ? setComResult("LOOSE") : setComResult("WIN");
    }
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    let _user = user.name;
    let _com = computer.name;

    if (_user === _com) {
      return "tie";
    } else if (_user === "Rock") return _com === "Scissors" ? "WIN" : "LOOSE";
    else if (_user === "Scissors") return _com === "Paper" ? "WIN" : "LOOSE";
    else if (_user === "Paper") return _com === "Rock" ? "WIN" : "LOOSE";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={userResult} />
        <Box title="Computer" item={computerSelect} result={comResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
