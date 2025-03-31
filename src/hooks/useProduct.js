import { useState, useEffect } from "react";
import getProduct from "../assets/components/services/product";
function useProduct() {
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const dataProduct = await getProduct();
            console.log(dataProduct)
            setDataProduct(dataProduct)
            return dataProduct
        }
        fetchProduct()
    }, [])

    return dataProduct
}

export default useProduct