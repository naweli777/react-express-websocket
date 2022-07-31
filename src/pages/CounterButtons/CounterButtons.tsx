import { useState } from "react";
import Button from "../../Components/Button/Button";

const CounterButtons = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  const handleOne = () => {
    setCountOne((prevState) => prevState + 1);
  };
  const handleTwo = () => {
    setCountTwo((prevState) => prevState + 1);
  };
  const handleThree = () => {
    setCountThree((prevState) => prevState + 1);
  };

  return (
    <div style={{ display: "flex", margin: "5px" }}>
      <div className="column">
        <h1 style={{ fontSize: "3rem" }}>{countOne}</h1>
        <Button title="Counter-1" onClick={handleOne} />
      </div>
      <div className="column">
        <h1 style={{ fontSize: "3rem" }}>{countTwo}</h1>
        <Button title="Counter-2" onClick={handleTwo} />
      </div>
      <div className="column">
        <h1 style={{ fontSize: "3rem" }}> {countThree}</h1>
        <Button title="Counter-3" onClick={handleThree} />
      </div>
    </div>
  );
};

export default CounterButtons;
