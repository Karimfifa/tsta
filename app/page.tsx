import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";

const fetchFotos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [fotos, setFotos] = useState([]);

 
  return (
    <>
      <h1>hhhh</h1>
    </>
  );
}

export default App;
