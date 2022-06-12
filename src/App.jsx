import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { ServicePage, SalonPage } from "./Pages";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Link to="/services/hair">Test page</Link>} />
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/salons/:name" element={<SalonPage />} />
      </Routes>
    </div>
  );
};

export default App;
