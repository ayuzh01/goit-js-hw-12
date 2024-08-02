export function searchGalleryQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45194494-dd5a842bfc997d055f9644a50";

    return fetch(`${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .catch((error) => {
        console.log(error);
    })
}
import axios from 'axios';

export default async function createHttpRequest(options) {
  try {
    const response = await axios.get('https://pixabay.com/api/', options);
    return response.data;
  } catch (error) {
    throw error;
  }
}