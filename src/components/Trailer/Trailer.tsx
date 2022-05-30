import { useState, memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import type { AllFilmT } from "../../types/filmType";
import ModalSmall from "../Modal/ModalSmall";
import { fetchTrailer } from "../../store/trailer";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { nanoid } from "nanoid";
import "../../style/style.scss";
import "./trailer.scss";

type TrailerProp = {
    films: AllFilmT[];
    allButton: number;
    urlTag: string;
}

const Trailer: React.FC<TrailerProp> = memo(({films, allButton, urlTag}) => {
    const [open, setOpen] = useState(false);
    const [selectTrailer, setSelectTrailer] = useState<number>(0);
    const dispatch = useAppDispatch();
    const {trailerFilms} = useAppSelector(state => state.trailerReducer)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const changeSelectTrailer = (id: number) => {
        setSelectTrailer(id)
    }
    useEffect(() => {
        console.log(urlTag)
        dispatch(fetchTrailer(`${urlTag}/popular`))
    }, [urlTag])

    const trailerButtons = trailerFilms?.map((film, i) => {
        if(i < allButton) {
            return (
                <Box key={nanoid()}>
                    <Box className="trailer-content inline-block">
                        <Box
                            className="trailer-show__btn"
                            onClick={() => {
                                handleOpen();
                                changeSelectTrailer(film?.id)
                            }}
                        >
                            <img src={`https://www.themoviedb.org/t/p/w500${film?.backdrop_path}`} alt={film?.title} />
                        </Box>
                        <Typography
                            variant="h6"
                            component="h6"
                            className="color-white"
                            align="center"
                        >
                            {film?.name || film?.title}
                        </Typography>
                    </Box>
                </Box>
            )
        }
    })

    return (
        <>
            <Box className="trailer-block">
                <img className="trailer-bg" src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${trailerFilms[0]?.backdrop_path}`} alt={films[0]?.title} />
                <Box  sx={{width: "100%"}}>
                    <Box>
                        <Typography
                            variant="h6"
                            component="h6"
                            className="color-white"
                        >
                            Последние трейлеры
                        </Typography>
                    </Box>
                    <Box className="trailer-card__wrapper">
                        {trailerButtons}
                    </Box>
                </Box>
            </Box>
            <ModalSmall open={open} handleClose={handleClose} id={selectTrailer} urlTag={urlTag}/>
        </>
    )
})
export default Trailer;