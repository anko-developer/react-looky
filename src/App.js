import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Navbar />
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
