import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import Carousel from "./Carousel";
import ButtonBlock from "../Button/ButtonBlock";
import type { ButtonT } from "../HomePage/HomePage";
import useCustomHandleChange from "../../hooks/handleChange";
import type { AllFilmT } from "../../types/filmType";
import "../../style/style.scss";

type CarouselBlockT = {
    buttonArr: ButtonT[];
    subCategory: string;
    title: string;
    thunk: any;
    films: AllFilmT[];
}

const CarouselBlock: React.FC<CarouselBlockT> = ({buttonArr, subCategory, title, thunk, films}) => {
    const { value, handleChange } = useCustomHandleChange("/tv");
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(thunk(`${value}${subCategory}`))
    }, [value])

    return (
        <Box sx={{mt: "30px"}}>
            <Box className="flex" sx={{mb: "20px"}}>
                <Typography
                    variant="h4"
                    component="span"
                >
                    {title}
                </Typography>
                <ButtonBlock activeClass="" handleChange={handleChange} actualCategory={value} buttonArr={buttonArr}/>
            </Box>
            <Carousel films={films} category={value}/>
        </Box>
    )
}
export default CarouselBlock;