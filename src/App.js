import Appbar from "./components/Appbar/Appbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
}

export default App;
