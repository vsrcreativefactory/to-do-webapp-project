import React, {useState} from "react";
import "./Header.css";
import { Button } from "react-bootstrap";

const Header = () => {
    const [color, setColor] = useState("BLUE");
    const [count, setCount] = useState(0);

    const changeColor = () => {
        setColor("RED")
    }
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }

    return (
        <>
        <h1 className="bg-danger text-white">Learn React Hooks</h1>
        <Button onClick={changeColor}>Change color</Button>
        <h2>The color selected is {color}</h2>
        <br />
        <Button className="m-2 btn btn-success" onClick={increment}>+</Button>
        <Button className="m-2 btn btn-danger" onClick={decrement}>-</Button>
        <h2 className="text-secondary">Count : {count}</h2>
        </>
    )
}

export default Header;