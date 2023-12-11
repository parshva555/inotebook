import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";
const Home = () => {
  return (
    <div>
      <Notes/>
    </div>
  );
};

export default Home;
