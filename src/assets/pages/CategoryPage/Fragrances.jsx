import useProduct from "../../../hooks/useProduct"
import Cart from "../../components/Cart/Cart"
function Fragrances() {
    const dataProduct = useProduct()
    const typeProduct = [...dataProduct].filter(item => item.category === "fragrances")
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg mx-auto'>
            {typeProduct.map(item => (
                <Cart key={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    discountPercentage={item.discountPercentage}
                    price={item.price}
                    description={item.description}
                />
            ))}
        </div>
    )
}

export default Fragrances