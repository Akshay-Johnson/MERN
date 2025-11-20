import { useEffect,useState } from "react";
export default function ProductListings() {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error("Error fetching products:", error));
    }, []);

    return(
            <ul>
                {products.map((p) => (
                    <li key={p._id}>
                    {p.name} - ${p.price}  
                    </li>
                ))}
            </ul>               
    )
}
