import axios from "axios"

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c3797d53aemshf5fce9192b69bc5p13d11cjsna4d659c72655',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}