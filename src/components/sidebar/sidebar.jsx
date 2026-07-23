import { useSidebar } from "../../hooks/sidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { isOpened, toggleSidebar } = useSidebar();
  return (
    // <!-- Cart Sidebar -->
    <aside
      className={`relative z-50 ${isOpened ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpened ? "opacity-50" : "opacity-0"
        }`}
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            {/* Slide-over panel */}
            <div
              className={`pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-300 sm:duration-500 ${
                isOpened ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl">
                {/* Drawer Header */}
                <div
                  className="flex-1 overflow-y-auto px-4 py-6 sm:px-6"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-xl font-bold text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    {/* Closing panel */}
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={toggleSidebar}
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={faXmark}
                          size="x"
                          color="green"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Cart Items Container */}
                  <div className="mt-8">
                    <div className="flow-root">
                      {/* <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart.length === 0 ? (
                          <li className="py-12 flex flex-col items-center justify-center text-center">
                            <div className="bg-gray-100 p-4 rounded-full mb-4 text-gray-400">
                              <ShoppingBag className="w-10 h-10" />
                            </div>
                            <p className="text-gray-500 font-medium">Your cart is empty.</p>
                            <button 
                              type="button" 
                              onClick={onClose}
                              className="mt-4 text-green-600 font-medium hover:text-green-500"
                            >
                              Continue Shopping &rarr;
                            </button>
                          </li>
                        ) : (
                          cart.map((item) => (
                            <li key={item.product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                                <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover object-center" />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col justify-between">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="line-clamp-2 pr-4 leading-tight"><a href="#">{item.product.name}</a></h3>
                                    <p className="ml-4 whitespace-nowrap">${(item.product.price * item.quantity).toFixed(2)}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center border border-gray-300 rounded-md">
                                    <button onClick={() => updateQuantity(item.product.id, -1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors rounded-l-md font-bold">-</button>
                                    <span className="px-3 py-1 font-medium text-gray-900 border-x border-gray-300 min-w-[2rem] text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.product.id, 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors rounded-r-md font-bold">+</button>
                                  </div>
                                  <div className="flex">
                                    <button 
                                      type="button" 
                                      onClick={() => removeFromCart(item.product.id)} 
                                      className="font-medium text-red-500 hover:text-red-600 flex items-center"
                                    >
                                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        )}
                      </ul> */}
                    </div>
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6 bg-gray-50">
                  <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                    <p>Subtotal</p>
                    {/* <p>${subtotal.toFixed(2)}</p> */}
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500 mb-6">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div>
                    <button
                      // onClick={onCheckout}
                      // disabled={cart.length === 0}
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        // onClick={onClose}
                        className="font-medium text-green-600 hover:text-green-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
