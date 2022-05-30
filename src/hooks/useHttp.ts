import axios from "axios";
import type { AllFilmT } from "../types/filmType";
import qs from "qs"

type RequestArg = {
    url: string;
}
type RequestT = ({...arg}: RequestArg) => any

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: "0c92164abe0731c88f3aa1c81eefeff6",
        language: "ru-RU"
    },
})

const useHttp = () => {
    const getRequest: RequestT = async ({url}) => {
        try {
            return await instance.get(url);
        } catch(e) {
            console.log("Error");
        }
    }
    return { getRequest }
}

export default useHttp;