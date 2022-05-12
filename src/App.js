import React from "react";
import Navbar from "./Navbar";
import ItemsList from "./ItemsList";
import Card from "./data/db.json";

function App() {
  const blogsAndPosts = Card;
  return (
    <React.Fragment>
      <Navbar />
      <ItemsList blogsAndPosts={blogsAndPosts} />
    </React.Fragment>
  );
}

export default App;
