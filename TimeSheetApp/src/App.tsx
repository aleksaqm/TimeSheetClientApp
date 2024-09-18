import "../scss/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import TimeSheetPage from "./pages/TimeSheetPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ProjectsPage from "./pages/ProjectsPage";
import CategoriesPage from "./pages/CategoriesPage";
import TeamMembersPage from "./pages/TeamMembersPage";
import ReportsPage from "./pages/ReportsPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./auth/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ClientsPage from "./pages/ClintsPage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/clients"
            element={
              <ProtectedRoute>
                <ClientsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute>
                <ClientsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/timesheet"
            element={
              <ProtectedRoute>
                <TimeSheetPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/activities"
            element={
              <ProtectedRoute>
                <ActivitiesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <ProtectedRoute>
                <CategoriesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teamMembers"
            element={
              <ProtectedRoute>
                <TeamMembersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
