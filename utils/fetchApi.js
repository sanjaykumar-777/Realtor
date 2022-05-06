import axios from "axios";


 export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'f67e81dd1bmshb05b9535e449571p15d5d8jsn80c179f8ec49'
         }
    });
    return data;
}