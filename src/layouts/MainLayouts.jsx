import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MainLayouts = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;