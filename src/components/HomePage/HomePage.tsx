import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { Box, Container } from "@mui/material";
import Main from "../Main/Main";
import CarouselBlock from "../Carousel/CarouselBlock";
import Trailer from "../Trailer/Trailer";
import ButtonBlock from "../Button/ButtonBlock";
import { fetchFilms } from "../../store/films/filmsSlice";
import type { AllFilmT } from "../../types/filmType";
import { fetchPopularCarouselFilms } from "../../store/popularCarousel";
import { fetchTrand } from "../../store/trandCarousel";
import "../Trailer/trailer.scss";

export type ButtonT = {
    url: string;
    title: string;
    defaultId: string;
}

const carouselBtn: ButtonT[] = [
    {url: "/tv", title: "По ТВ", defaultId: "popularTv"},
    {url: "/movie", title: "В кинотеатре", defaultId: "popularMovie"}
]

const trailerBtn: ButtonT[] = [
    {url: "tv", title: "По ТВ", defaultId: "trailerTv"},
    {url: "movie", title: "В кинотеатре", defaultId: "trailerMovie"}
]

const carouselTrendBtn: ButtonT[] = [
    {url: "/tv", title: "По ТВ", defaultId: "trandTv"},
    {url: "/movie", title: "В кинотеатре", defaultId: "trandMovie"}
]

const HomePage: React.FC = () => {
    const [randomFilm, setRandomFilm] = useState<string>('');
    const [showTrailer, setShowTrailer] = useState<string>("tv");
    const dispatch = useAppDispatch();
    const {films} = useAppSelector(state => state.films);
    const {popularFilms} = useAppSelector(state => state.popularCarouselFilmsReducer);
    const {trandFilms} = useAppSelector(state => state.trandReducer)

    const randomPoster = (films: AllFilmT[]) => {
        const randomNum = Math.floor(Math.random() * films?.length);
        if(films) {
            setRandomFilm(films[randomNum]?.backdrop_path)
        }
    }

    const changeShowTrailer = (category: string) => {
        setShowTrailer(category)
    }

    useEffect(() => {
        dispatch(fetchFilms("/movie/popular"));
    }, [])

    useEffect(() => {
        randomPoster(films)
    }, [films])

    const showContent = showTrailer === "tv" ?  <Trailer films={films} allButton={1} urlTag="/movie"/> :  <Trailer films={films} allButton={4} urlTag="/tv"/>

    return (
        <Box sx={{height: '100%'}}>
            <Container maxWidth="xl">
                <Main filmPath={randomFilm}/>
                <CarouselBlock
                    buttonArr={carouselBtn}
                    subCategory="/popular"
                    title="Что популярно"
                    thunk={fetchPopularCarouselFilms}
                    films={popularFilms}
                />
                <Box className="trailer-wrapper">
                    <ButtonBlock
                        activeClass="trailer-button__block"
                        actualCategory={showTrailer}
                        handleChange={changeShowTrailer}
                        buttonArr={trailerBtn}/>
                    {showContent}
                </Box>
                <CarouselBlock
                    buttonArr={carouselTrendBtn}
                    subCategory="/top_rated"
                    title="В тренде"
                    thunk={fetchTrand}
                    films={trandFilms}
                />
                <Box sx={{width: "100%", height: "350px", backgroundColor: "#590696", backgroundImage: 'url("https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2l0eSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80")', backgroundSize: "cover"}}>

                </Box>
            </Container>
        </Box>
    )
}
export default HomePage;