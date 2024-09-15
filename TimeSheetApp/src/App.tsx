import "../scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import NoPage from "./pages/NoPage";
import TimeSheetPage from "./pages/TimeSheetPage";
import ActivitiesPage from "./pages/ActivitiesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clients" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/timesheet" element={<TimeSheetPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
