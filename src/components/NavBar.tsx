import { Link } from "react-router";
import Cart_For_Product_Details from "./Cart_For_Product_Details";

const NavBar = () => {
  const navItem = ["Home", "Store", "About"];

  return (
    <>
      {/* Header */}
      <div className="text-2xl text-black flex items-center justify-center p-3 font-medium font-serif tracking-[0.3rem] bg-gray-200">
        <h1 className="w-full text-center">STORE</h1>
      </div>

      {/* Navigation */}
      <div className="w-full bg-gray-300 flex flex-col md:flex-row justify-between items-center p-4 md:p-6 gap-4 md:gap-0">
        {/* Nav Items */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-[1.3rem] md:text-[1.6rem] font-bold font-mono">
          {navItem.map((item, index) => (
            <Link
              to={`/${item}`}
              key={index}
              className="cursor-pointer hover:text-blue-700 transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Cart */}
        <div className="flex justify-end mt-4 md:mt-0">
          <Cart_For_Product_Details />
        </div>
      </div>
    </>
  );
};

export default NavBar;
