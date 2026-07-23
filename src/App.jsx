import "./App.css";
import Main from "./components/main/main";
import Navbar from "./components/nav/nav";
import Sidebar from "./components/sidebar/sidebar";
import { SidebarProvider } from "./hooks/sidebarContext";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar/>
      </SidebarProvider>
      <Main />
    </>
  );
};

export default App;
