import { useEffect, memo } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { fetchVideo } from "../../store/video";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import ModalNoTrailer from "./ModalNoTrailer";
import "./modal.scss";

type ModalProps = {
    open: boolean;
    handleClose: () => void;
    id: number;
    urlTag: string;
}

const ModalSmall: React.FC<ModalProps> = memo(({open, handleClose, id, urlTag}) => {
    const dispatch = useAppDispatch();
    const {video, error} = useAppSelector(state => state.videoReducer);
    useEffect(() => {
        dispatch(fetchVideo(`${urlTag}/${id}/videos`))
    }, [id])

    const content = video.length ? <iframe width="640" height="480" src={`https://www.youtube.com/embed/${video[0]?.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : <ModalNoTrailer/>

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-container">
                {content}
            </Box>
       </Modal>
    )
})
export default ModalSmall;