import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./modal.scss";

const ModalNoTrailer: React.FC = () => {
    return (
        <Box className="modal-container modal-empty">
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Нет трейлера
            </Typography>
        </Box>
    )
}
export default ModalNoTrailer;