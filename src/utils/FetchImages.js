import axios from "axios";

const GET_API_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const FetchImages = async (query) => {
  const accessKey = GET_API_KEY;

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: query,
      },
    });

    return response.data.results;
  } catch (error) {
    console.log("Error : ", error);
  }
};

export default FetchImages;
