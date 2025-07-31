import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

export type CartItem = {
  name: string;
  price: number;
  img: string;
  count: number;
  priceCount: number;
};

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
