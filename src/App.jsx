import React from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>パワーー！</h1>
      <ColofulMessage color="orange">やー！</ColofulMessage>
      <ColofulMessage color="lightgreen">やーーー！！！</ColofulMessage>
      <button onClick={onClickButton}>やー！</button>
    </>
  );
};
export default App;
