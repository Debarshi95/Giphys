import generateClient from '../utils/generateClient';

const apiKey = process.env.REACT_APP_API_KEY;

const giphyApi = generateClient(process.env.REACT_APP_GIPHY_URL);

export const getSearch = (query = '') => giphyApi.get(`/search?api_key=${apiKey}&q=${query}`);
export const getTrending = () => giphyApi.get(`/trending?api_key=${apiKey}`);
