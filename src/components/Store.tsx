import ButtonsToAddItemsinCart from "./ButtonsToAddItemsinCart";
import data from "../items.json";
import { useCart } from "../Hooks/CartContext";

const Store = () => {
  const { addToCart, cartItems } = useCart();

  return (
    <div className="px-4 sm:px-6 md:px-[7%] py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      {data.map((item) => {
        const cartItem = cartItems.find((i) => i.name === item.name);

        return (
          <div
            key={item.id}
            className="bg-white shadow-md border border-gray-200 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="aspect-[4/3] w-full">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="py-4 px-5 flex flex-col items-start">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h1>
              <p className="text-base sm:text-lg text-green-600 font-medium">
                ${item.price}
              </p>
            </div>

            <ButtonsToAddItemsinCart
              item={{
                img: item.imgUrl,
                name: item.name,
                price: item.price,
              }}
              count={cartItem?.count || 0}
              priceCount={cartItem?.priceCount || 0}
            />

            <div className="flex justify-center p-4">
              <button
                className="shadow-md shadow-gray-400 bg-blue-500 text-white px-4 py-2 rounded-md hover:scale-105 transition-transform"
                onClick={() => {
                  console.log("Adding to cart:", item);
                  addToCart({
                    name: item.name,
                    price: item.price,
                    img: item.imgUrl,
                    count: 1,
                    priceCount: item.price,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Store;
