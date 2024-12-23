import React, {useState} from "react";

const products = [
    {id: 1, name:"Laptop", brand:"Dell", qty: 1},
    {id: 2, name:"Laptop", brand:"HP", qty: 1},
    {id: 3, name:"Laptop", brand:"Lenovo", qty: 1},
    {id: 4, name:"Laptop", brand:"Acer", qty: 1},
    {id: 5, name:"Laptop", brand:"Mac", qty: 1},
];

const Map = () => {
    const [items, setItem] = useState(products);

    const changeQty = (id) => {
        const newItem = items.map((item) =>
        item.id === id ? {...item, qty: item.qty + 1} : item 
        );
        setItem(newItem);
    };
    return (
        <>
        {items.map((product) => (
            <div className="bg-success text-white m-2" key={product.id}>
                <h1>{product.name}</h1>
                <h2>Brand: {product.brand}</h2>
                <h3>Qty: {product.qty}</h3>
                <button onClick={() => changeQty(product.id)} type="button" className="btn btn-warning">+</button>
            </div>
        )
        )}
        </>
    )
}

export default Map;