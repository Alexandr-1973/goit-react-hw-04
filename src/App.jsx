import { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/error-message/ErrorMessage";
import ImageGallery from "./components/image-gallery/ImageGallery";
import LoadMoreBtn from "./components/load-more-btn/LoadMoreBtn";
import ImageModal from "./components/image-modal/ImageModal";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import axios from "axios";
import fetchServer from "./api/fotos-api";

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    async function getInfoServer(searchText, pageNumber, perPage) {
      const infoData = await fetchServer(searchText, pageNumber, perPage);
      console.log(infoData);
    }
    getInfoServer("cat", 1, 15);
  });

  return (
    <>
      <SearchBar />
      <Loader />
      <ErrorMessage />
      <ImageGallery />
      <LoadMoreBtn />
      <ImageModal />
    </>
  );
}

export default App;
