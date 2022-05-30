import Drawer from '@mui/material/Drawer';
import Acordion from '../Accordion/Acordion';
import type { PageT } from "../../types/pageType";
import { theme } from '../..';
import { nanoid } from "nanoid";

type SlideMenuProps = {
    open: boolean;
    toggleDrawe: () => void;
    pages: PageT[];
}

const SlideMenu: React.FC<SlideMenuProps> = ({open, toggleDrawe, pages}) => {

    const content = pages.map((page, i) => <Acordion key={nanoid()} page={page} num={i}/>)
    let classes={ paper: '#900' }
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawe}
            classes={classes}
        >
            {content}
        </Drawer>
    )
}
export default SlideMenu;