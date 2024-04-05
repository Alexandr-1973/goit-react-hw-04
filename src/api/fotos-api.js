import axios from "axios";

async function fetchServer(searchText, perPage, pageNumber) {
  const BASE_URL = "https://api.unsplash.com";
  const SEARCH_HEADER = "/search/photos";
  const Client_ID = "ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k";
  const url = `${BASE_URL}${SEARCH_HEADER}`;
  const params = {
    client_id: Client_ID,
    query: searchText,
    // image_type: "photo",
    // orientation: "horizontal",
    // safesearch: true,
    // q: searchText,
    per_page: perPage,
    page: pageNumber,
  };
  const res = await axios.get(url, { params });
  return res.data;
}

export default fetchServer;
