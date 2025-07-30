import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

type Props = {
  price: number;
};

const ButtonsToAddItemsinCart = ({ price }: Props) => {
  const [count, setCount] = useState(0);
  const [priceSetter, setPriceSetter] = useState(0);

  const priceIncrement = () => {
    setCount((prev) => prev + 1);
    setPriceSetter((prev) => parseFloat((prev + price).toFixed(2)));
  };

  const priceDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
    setPriceSetter((prev) =>
      prev > 0 ? parseFloat((prev - price).toFixed(2)) : 0
    );
  };

  return (
    <div className="px-5 pb-5 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-lg sm:text-xl gap-4 sm:gap-6">
        <h1 className="font-medium text-gray-700">Quantity</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={priceDecrement}
            className="text-gray-600 hover:text-red-500 transition duration-200"
          >
            <FiMinus size={22} />
          </button>
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={priceIncrement}
            className="text-gray-600 hover:text-green-600 transition duration-200"
          >
            <IoMdAdd size={24} />
          </button>
        </div>
      </div>

      {count > 0 && (
        <div className="mt-4 text-center text-base sm:text-lg text-green-700 font-semibold">
          Total: ${priceSetter.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default ButtonsToAddItemsinCart;
