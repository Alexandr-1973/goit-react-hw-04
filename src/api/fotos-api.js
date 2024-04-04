import axios from "axios";

async function axiosGet() {
  const data = await axios.get(
    "https://api.unsplash.com/search/photos?page=1&query=office"
  );
  console.log(data);
}

axiosGet();
