import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Main(props) {
  const [image, setImage] = useState("");

  // write code below this line
  useEffect(() => {
    (async function getimage() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const json = await res.json();
      const imageUrl = json["message"];
      setImage(imageUrl);
    })();
  }, []);

  // write code above this line

  if (image === "") return <h1>Waiting for image...</h1>;
  else return <img src={image} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
