import React from "react";
import { Outlet} from "react-router-dom";
 
const Layout = () => {
    return <div>
        <header> My App Header </header>
        <nav> My app Navigaton</nav>
        <hr />
        <main>
            <Outlet />
        </main>
    </div>
}

export default Layout;