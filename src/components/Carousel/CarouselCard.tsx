import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import type { AllFilmT } from "../../types/filmType";
import 'swiper/css';
import "./carousel.scss";

type CarouselItepProps = {
    film: AllFilmT;
    category: string;
}

const CarouselCard: React.FC<CarouselItepProps> = memo(({film, category}) => {
    return (
        <Box>
            <Box className="carousel__poster-wrapper">
                <Link to={`${category}/${film.id}`}>
                    <Box>
                        <img className='carousel__poster' src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="poster" />
                    </Box>
                </Link>
            </Box>
            <Box>
                <Typography
                    variant="body1"
                    component="h6"
                >
                    {film.title || film.name}
                </Typography>
                <Typography
                    variant="body2"
                    component="h6"
                >
                    {film.release_date || film.first_air_date}
                </Typography>
            </Box>
        </Box>
    )
})
export default CarouselCard;