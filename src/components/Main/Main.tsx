import { Box, Typography } from "@mui/material";
import "./main.scss";


type MainProps = {
    filmPath: string
}

const Main: React.FC<MainProps> = ({filmPath}) => {
    return (
        <>
            <Box className="main-wrapper">
                <img
                    src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces${filmPath}`}
                    alt="back"
                    className="main__bg"
                />
                <Box className="main-content">
                    <Box>
                        <Typography
                            variant="h3"
                            component="h3"
                            color="white"
                        >
                            Добро пожаловать.
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h4"
                            color="white"
                        >
                            Миллионы фильмов, сериалов и людей. Исследуйте сейчас.
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </>
    )
}
export default Main;


// const mapState = createStructuredSelector({
//     films
// })

// const mapState = (state: RootState) => ({
//     films: state.films.films
// })

// const mapDispatch = {
//     fetchFilms
// }

// const connector = connect(mapState, mapDispatch)
// type PropsFromRedux = ConnectedProps<typeof connector>

// export default connector(Main);
