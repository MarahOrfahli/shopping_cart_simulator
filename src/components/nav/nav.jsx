import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "../../hooks/sidebarContext";

const Navbar = () => {
  const { toggleSidebar} = useSidebar()
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* <!-- Logo --> */}
          <div className="shrink-0 flex items-center gap-1 cursor-pointer">
            <FontAwesomeIcon icon={faStore} size="2x" color="green" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              <span className="text-brand-600">MyStore</span>
            </span>
          </div>

          {/* <!-- Cart Toggle Button --> */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              id="cartToggleBtn"
              onClick={toggleSidebar}
              className="relative text-gray-500 hover:text-brand-600 transition-colors p-1 cursor-pointer"
            >
              <FontAwesomeIcon icon={faShoppingCart} size="2x" color="green" />
              {/* <!-- Badge --> */}
              <span
                id="cartBadge"
                className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-[10px] font-bold text-white opacity-0 transition-opacity duration-300"
              >
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
