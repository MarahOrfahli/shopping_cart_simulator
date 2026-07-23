import { createContext, useContext, useState } from "react";

const SidebarContext = createContext(false)

export function SidebarProvider ({children}) {
    const [isOpened, setIsOpened] = useState(false)

    function toggleSidebar() {
    setIsOpened((currentVal) => (currentVal ? false : true));
  }

  const value = {
    isOpened,
    toggleSidebar
  };
    return ( 
        <SidebarContext value={value}>
            {children}
        </SidebarContext>
     );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSidebar() {
    const context = useContext(SidebarContext)
    return context
}
