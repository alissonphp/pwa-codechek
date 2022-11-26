import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./contexts/auth";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Scan } from "./pages/Scan";
import { Search } from "./pages/Search";
import { TemplateAppHome } from "./Templates/AppHome";
import { TemplateAppOtherScreen } from "./Templates/AppOtherScreen";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <TemplateAppHome />
              </RequireAuth>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route
            path="/"
            element={
              <RequireAuth>
                <TemplateAppOtherScreen />
              </RequireAuth>
            }
          >
            <Route path="/scan" element={<Scan />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
