import "./App.css";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { ServicePage, SalonPage } from "./Pages";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/salons/:name" element={<SalonPage />} />
      </Routes>
    </div>
  );
};

export default App;
