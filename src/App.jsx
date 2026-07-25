import Main from "./components/main/main";
import Navbar from "./components/nav/nav";
import Sidebar from "./components/sidebar/sidebar";
import { CartProvider } from "./hooks/cartContext";
import { SidebarProvider } from "./hooks/sidebarContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <SidebarProvider>
          <Navbar />
          <Sidebar/>
        </SidebarProvider>
        <Main />
      </CartProvider>
    </>
  );
};

export default App;
