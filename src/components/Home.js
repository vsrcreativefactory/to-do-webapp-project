import React from "react";
import Child from "./Child";
import "./Home.css";

const Home = () => {
    return(
    <div>
        <h1 className="h1">Home component</h1>
        <Child />
    </div>
    )
}

export default Home;