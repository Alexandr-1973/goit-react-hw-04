import { useEffect, useState } from "react";
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

  return <></>;
}

export default App;
