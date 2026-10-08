import { useState } from "react";
import Main from "./components/main/main";
import Navbar from "./components/nav/nav";
import Sidebar from "./components/sidebar/sidebar";
import OrderSuccess from "./components/order_success/OrderSuccess";
import { CartProvider } from "./hooks/cartContext";
import { SidebarProvider } from "./hooks/sidebarContext";

const App = () => {
  const [orderComplete, setOrderComplete] = useState(false);

  return (
    <CartProvider>
      <SidebarProvider>
        {orderComplete ? (
          <OrderSuccess onBackToProducts={() => setOrderComplete(false)} />
        ) : (
          <>
            <Navbar />
            <Sidebar onOrderComplete={() => setOrderComplete(true)} />
            <Main />
          </>
        )}
      </SidebarProvider>
    </CartProvider>
  );
};

export default App;
