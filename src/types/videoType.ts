export type VideoT = {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
}

export type VideoStateT = {
    video: VideoT[];
    error: boolean;
}

export type ResponseVideoT = {
    id: number;
    results: VideoT[];
}