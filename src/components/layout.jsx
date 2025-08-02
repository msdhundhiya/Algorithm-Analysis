import React from "react";
import { Outlet} from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
 
const Layout = () => {
    return  <>

        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="container mx-auto p-4 md:p-8">
                <Header />
                <Nav />
                <main className="mt-8">
                    <Outlet />
                </main>
            </div>
        </div>
    
    
    </>
}

export default Layout;