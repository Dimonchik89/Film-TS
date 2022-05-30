import { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import type { HeaderMenuProps } from "./HeaderMenu";
import SlideMenu from "../SlideMenu/SlideMenu";

const HeaderAdaptiveMenu: React.FC<HeaderMenuProps> = ({pages}) => {
    const [open, setOpen] = useState(false);

    const toggleDrawe = () => {
        setOpen(open => !open)
    }

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawe}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <SlideMenu open={open} toggleDrawe={toggleDrawe} pages={pages}/>
        </Box>
    )
}
export default HeaderAdaptiveMenu;