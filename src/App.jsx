import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0)

  // async function axiosGet() {
  //   const data = await axios.get(
  //     "https://api.unsplash.com/photos?client_id=ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k"
  //   );
  //   console.log(data);
  // }
//   useEffect(() => {
//   async function axiosGet() {
//     // const params = {
//     //   query: "cat",
//     // }
//     const galId = "ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k";
//     const searchText = "office";
//     const res = await axios.get(
//       `https://api.unsplash.com/search/photos?client_id=ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k&query=cat`
//     );
//     console.log(res.data);
//   }

//   axiosGet();
// })
  async function axiosGet() {
    // const params = {
    //   query: "cat",
    // }
    const galId = "ahhcIzD1njr8w5SDdkwapZgiC8vxXk9AN6nr5KfkI3k";
    const searchText = "office";
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${galId}&query=${searchText}`
    );
    console.log(res.data);
  }

  axiosGet();

  return <></>;
}

export default App;
