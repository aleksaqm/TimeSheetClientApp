import "../scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientsPage from "./pages/ClientsPage";
import TestPage from "./pages/TestPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
