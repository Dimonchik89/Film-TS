import { memo } from "react";
import "../../style/style.scss";
import "./carousel.scss";

type CarouselButtonProps = {
    handleChange: (url: string) => void;
    url: string;
    actualCategory: string;
    title: string;
    defaultId: string;
}

const CarouselButton: React.FC<CarouselButtonProps> = memo(({handleChange, url, actualCategory, title, defaultId}) => {
    const active = actualCategory === url ? "active" : "";
    const bg = actualCategory === url ? "background__button" : "";
    return (
        <div className="inline-block carousel__button">
            <label htmlFor={defaultId} className={`carousel__button-label ${active}`}>
                <input
                    className="carousel__input"
                    type="radio"
                    id={defaultId}
                    name="populat"
                    onChange={() => handleChange(url)}
                />
                {title}
            </label>
            <div className={bg}></div>
        </div>
    )
})
export default CarouselButton;