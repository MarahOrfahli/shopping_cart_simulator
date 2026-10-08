import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ShoppingCard = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <>
      <div className="p-2 h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white">
        <img
          src={"./images/product_" + item.type + ".jpg"}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="line-clamp-2 pr-4 leading-tight">
              <a href="#">{item.name}</a>
            </h3>
            <p className="ml-4 whitespace-nowrap text-green-600 font-bold text-x">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex flex-1 text-indigo-600 font-bold text-x">${(item.price)}</div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              disabled={item.quantity == 1}
              onClick={() => updateQuantity(item.id, "decrease")}
              className={`px-3 py-1 text-gray-600 hover:bg-gray-100 ${item.quantity == 1 ? 'bg-gray-100 cursor-not-allowed' : 'cursor-pointer'} transition-colors rounded-l-md font-bold`}
            >
              -
            </button>
            <span className="px-3 py-1 font-medium text-gray-900 border-x border-gray-300 min-w-8 text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, "increase")}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer transition-colors rounded-r-md font-bold"
            >
              +
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="font-medium text-red-500 hover:bg-red-200 flex items-center border-red-500 border p-2 rounded-sm cursor-pointer"
            >
              <FontAwesomeIcon icon={faTrash} size="x" color="red" /> Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
