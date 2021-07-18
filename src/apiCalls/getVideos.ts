import { VideoProp } from "../pages/Home";

const uploadsRoute = 'http://localhost:4000/api/upload_list';

export const getVideos = async (): Promise<VideoProp[] | any> => {
    const response = await fetch(uploadsRoute)
    const json = await response.json()
    return json;
};