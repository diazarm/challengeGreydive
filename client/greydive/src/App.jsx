import { Routes, Route } from "react-router-dom";
import { Landing, Home } from "./views";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
   </div>
  );
}

export default App;