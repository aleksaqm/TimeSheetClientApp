import "../scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";
import NoPage from "./pages/NoPage";
import TimeSheetPage from "./pages/TimeSheetPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/clients" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/timesheet" element={<TimeSheetPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
