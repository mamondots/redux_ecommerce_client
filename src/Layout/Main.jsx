import { Outlet } from "react-router-dom";
import Navigator from "../Navigator/Navigator";
import Footer from "../Footer/Footer";
import Copy_right from "../Footer/Copy_right/Copy_right";


const Main = () => {
    return (
        <div>
            <Navigator></Navigator>
            <Outlet></Outlet>
            <Footer></Footer>
            <Copy_right></Copy_right>
        </div>
    );
};

export default Main;