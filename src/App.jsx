import "./App.css";
import { SpecificServicePage } from "./Pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/services/:service" element={<SpecificServicePage />} />
      </Routes>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
