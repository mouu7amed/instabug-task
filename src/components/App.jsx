import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../utilities/AuthProvider";
import { RequireAuth } from "../utilities/RequireAuth";
import { Login } from "./Login/Login";
import { Main } from "./Main";
import { NoMatch } from "./NoMatch";
import { Welcome } from "./Welcome";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Main title="Instabug" />} />
        <Route path="/login" element={<Login title="Login | Instabug" />} />
        <Route
          path="/welcome"
          element={
            <RequireAuth>
              <Welcome title="Welcome | Instabug" />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoMatch title="404 | Instabug" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
