import React from "react";
import { io } from "socket.io-client";
import CounterButtons from "./pages/CounterButtons/CounterButtons";
const App = () => {
  React.useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("connect", () => console.log(socket.id));
  }, []);
  return <div className="App">
    <CounterButtons/>
  </div>;
};
export default App;
