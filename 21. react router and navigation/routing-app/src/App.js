import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";

function App() {
  return <div className="App">
    Hello from App

    <Routes>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </div>;
}

export default App;
