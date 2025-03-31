import React from 'react'
import ProductSection from '../../components/ProductSection'

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