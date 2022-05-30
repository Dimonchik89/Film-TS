import React from "react";
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../../Logo/Logo";
import UserAvatar from "../Avatar/Avatar";
import HeaderMenu from "./HeaderMenu";
import HeaderAdaptiveMenu from "./HeaderAdaptiveMenu";
import "../../style/style.scss";
import "./header.scss";

const arr = [
    {title: 'Фильмы', links: [
        {linkTitle: "Популярные", linkUrl: "/movie/popular"},
        {linkTitle: "Смотрят сейчас", linkUrl: "/movie/now_playing"},
        {linkTitle: "Ожидаемые", linkUrl: "/movie/upcoming"},
        {linkTitle: "Лучшие", linkUrl: "/movie/top_rated"}]
    },
    {title: 'Сериалы', links: [
        {linkTitle: "Популярные", linkUrl: "/tv/popular"},
        {linkTitle: "В эфире сегодня", linkUrl: "/tv/airing_today"},
        {linkTitle: "По телевидению", linkUrl: "/tv/on_the_air"},
        {linkTitle: "Лучшие", linkUrl: "/tv/top_rated"}]
    },
    {title: "Люди", links: [{linkTitle: "Популярные люди", linkUrl: "/person/popular"}]}
]
const pages = ['Фильмы', 'Сериалы', 'Люди'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Header: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Logo/>
                        <HeaderAdaptiveMenu pages={arr}/>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <HeaderMenu pages={arr}/>
                    <UserAvatar/>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header;