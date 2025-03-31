import BaseApi from "./baseApi";

async function getProduct() {
    const data = await fetch(BaseApi + "product").then(res => res.json());
    return data.products;
}

export default getProduct 