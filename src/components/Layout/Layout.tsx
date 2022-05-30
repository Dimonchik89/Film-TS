import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom"
import { Box } from "@mui/material";
import "../../style/style.scss";
import "./layout.scss";

const Layout: React.FC = () => {
    return (
        <Box className="flex direction-column space-between layout">
            <Box>
                <Header/>
                <Outlet/>
            </Box>
            <Footer/>
        </Box>
    )
}
export default Layout;