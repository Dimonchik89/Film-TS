export type AllFilmT = {
    poster_path: string | null;
    backdrop_path: string;
    release_date?: string;
    first_air_date?: string;
    id: number;
    title?: string;
    name?: string;
    original_language: string;
    popularity: number;
}

export type ResponseFilmsResult = {
    page: number;
    results: AllFilmT[];
    total_results: number;
    total_pages: number;
}

export type FilmStateT = {
    films: AllFilmT[];
    currentPage: number;
    totalPages: number;
    randomFilmPosterPath: string;
    loading: boolean;
    error: boolean;
}

export type PopularCarouselStateT = {
    popularFilms: AllFilmT[]
}

export type TrandCarouselStateT = {
    trandFilms: AllFilmT[]
}