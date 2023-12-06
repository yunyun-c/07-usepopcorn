// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="#A020F0" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating />
    <StarRating size={24} color="tomato" className="test" defaultRating={3} />
    <StarRating messages={["terrible", "bad", "okay", "good", "amazing"]} />
    <Test /> */}
  </React.StrictMode>
);
