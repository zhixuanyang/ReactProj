import axios from 'axios';

const KEY = 'AIzaSyBo016KtCy8Mx2W2VXpcwy6eLmY5d1Og9A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
