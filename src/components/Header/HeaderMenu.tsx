import { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import type { PageT } from "../../types/pageType";
import Fade from '@mui/material/Fade';

export type HeaderMenuProps = {
    pages: PageT[]
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({pages}) => {
    const [anchorElSub, setAnchorElSub] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElSub);
    const handleOpenSubMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSub(event.currentTarget)
    }
    const handleCloseSubMenu = () => {
        setAnchorElSub(null);
    };

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
                <Box key={page.title}>
                    <Button
                        id={`fade-${page.title}`}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleOpenSubMenu}
                    >
                        {page.title}
                    </Button>
                    <Menu
                        MenuListProps={{
                            'aria-labelledby': `fade-${page.title}`,
                        }}
                        anchorEl={anchorElSub}
                        open={anchorElSub && open && anchorElSub.id === `fade-${page.title}` ? true : false}
                        onClose={handleCloseSubMenu}
                        TransitionComponent={Fade}
                    >
                        {page.links.map(link => (
                            <MenuItem key={link.linkUrl} onClick={handleCloseSubMenu}>
                                <Link
                                    to={link.linkUrl}
                                    className="default-link"
                                >
                                    {link.linkTitle}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            ))}
        </Box>
    )
}
export default HeaderMenu;