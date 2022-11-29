import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./contexts/auth";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/welcome"
            element={
              <RequireAuth>
                <Welcome />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
