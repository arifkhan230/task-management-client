import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";



const Main = () => {
    return (
        <div className="bg-orange-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;