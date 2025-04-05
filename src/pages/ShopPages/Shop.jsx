import React from 'react'
import getProduct from '../../assets/components/services/product'

const Shop = () => {
    const categoryList = [
        { title: "Groceries", category: "groceries" },
        { title: "Beauty", category: "beauty" },
        { title: "Furniture", category: "furniture" },
        { title: "Fragrances", category: "fragrances" },
    ]
    return (
        <>
            {
                categoryList.map((item) => (
                    <section className='max-w-screen-lg mx-auto'>
                        <ProductSection
                            title={item.title}
                            category={item.category}
                        />
                    </section>
                ))
            }
        </>

    )
}

export default Shop