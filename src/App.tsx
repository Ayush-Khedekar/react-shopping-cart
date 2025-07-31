import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
