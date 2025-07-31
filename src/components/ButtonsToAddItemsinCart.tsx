import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/StoreSlice";

type Props = {
  item: {
    name: string;
    price: number;
    img: string;
  };
  count: number;
  priceCount: number;
};

const ButtonsToAddItemsinCart = ({ count, item, priceCount }: Props) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(
      addToCart({
        ...item,
        count: 1,
        priceCount: item.price,
      })
    );
  };

  const decrement = () => {
    dispatch(removeFromCart(item.name));
  };

  return (
    <div className="px-5 pb-5 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-lg sm:text-xl gap-4 sm:gap-6">
        <h1 className="font-medium text-gray-700">Quantity</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={decrement}
            className="text-gray-600 hover:text-red-500 transition duration-200"
          >
            <FiMinus size={22} />
          </button>
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={increment}
            className="text-gray-600 hover:text-green-600 transition duration-200"
          >
            <IoMdAdd size={24} />
          </button>
        </div>
      </div>

      {count > 0 && (
        <div className="mt-4 text-center text-base sm:text-lg text-green-700 font-semibold">
          Total: ${priceCount.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default ButtonsToAddItemsinCart;
