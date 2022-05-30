import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
    return (
        <>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                {/* <Link to="/a" className="default-link"> */}
                    LOGO
                {/* </Link> */}
            </Typography>
        </>
    )
}
export default Logo;