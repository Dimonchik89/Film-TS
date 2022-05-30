import { Box } from "@mui/material";
import CarouselButton from "../Carousel/CarouselButton";
import { nanoid } from "nanoid";
import type { ButtonT } from "../HomePage/HomePage";

type ButtonBlockProps = {
    actualCategory: string;
    handleChange: (arg: string) => void;
    buttonArr: ButtonT[];
    activeClass: string;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({actualCategory, handleChange, buttonArr, activeClass}) => {

    const buttons = buttonArr.map(button => <CarouselButton
                                                key={nanoid()}
                                                handleChange={handleChange}
                                                url={button.url}
                                                actualCategory={actualCategory}
                                                title={button.title}
                                                defaultId={button.defaultId}/>
    )

    return (
        <Box className={`inline-block ${activeClass}`}>
            <Box className="carousel-button__wrapper">
                {buttons}
            </Box>
        </Box>
    )
}
export default ButtonBlock;