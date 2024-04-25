"use client"
import { useState } from "react"
import { sidebarContext } from "./context";
import Header from "./Header";
import ScrollHeader from "./ScrollHeader";
const Navbar = () => {
    const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
                <Header />
                <ScrollHeader />
    </sidebarContext.Provider>
  )
}

export default Navbar