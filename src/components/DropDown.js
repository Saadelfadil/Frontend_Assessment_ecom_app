import { useEffect, useState } from 'react';

export default function DropdownComponent(props) {
    const [data, setData] = useState([]);
    const [cat, setCat] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
                .then(async (res) => {
                const response = await res.json();
                setData(response);
                })
                .then(json => console.log(json))
    }, []);

    useEffect(() => {
             fetch(`https://fakestoreapi.com/products/category/${cat}`)
                .then(async (res) => {
                const response = await res.json();
                await props.setProducts(response);
                })
                .then(json => console.log(json))
    }, [cat]);

    console.log("CAT : ", cat)
    return (
        <div className="relative w-full lg:max-w-sm">
                <select value={cat} className="w-full p-2.5 text-black bg-white mb-4 border rounded-md shadow-sm outline-none appearance-none uppercase focus:border-orange-200" onChange={(e) => setCat(e.target.value)}>
                    {data.map((product) => (
                        <option>{product}</option>
                    ))}
                </select>
        </div>
    );
}