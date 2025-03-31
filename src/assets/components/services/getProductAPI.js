import { useState } from 'react';
import getProduct from './product';
function getProductAPI() {
    const [dataProduct, setDataProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const dataProduct = await getProduct();
            console.log(dataProduct)
            setDataProduct(dataProduct)
            return dataProduct
        }
        fetchProduct()
    }
        , [])
    return dataProduct
}

export default getProductAPI