import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import type { PageT } from "../../types/pageType";
import "../../style/style.scss";

type AcordionProps = {
    page: PageT,
    num: number;
}

const Acordion: React.FC<AcordionProps> = ({page, num}) => {

    const subContent = page.links.map(link => {
        return (
            <AccordionDetails key={nanoid()}>
                <Link to={link.linkUrl} className="default-link">
                    {link.linkTitle}
                </Link>
            </AccordionDetails>
        )
    })
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${num}a-content`}
                id={`panel${num}a-header`}
            >
                <Typography>{page.title}</Typography>
            </AccordionSummary>
            {subContent}
        </Accordion>
    )
}
export default Acordion;