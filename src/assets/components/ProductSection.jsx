import Cart from './Cart/Cart'
import arrowRight from '../images/arrow-right.png'
import { NavLink } from 'react-router'
import { useState } from 'react'
import useProduct from '../../hooks/useProduct'

function ProductSection({ title, category }) {
    const dataProduct = useProduct()
    const typeProduct = [...dataProduct].filter(item => item.category === category)
    const [visibleCount, setVisibleCount] = useState(4);

    return (
        <div className='flex flex-col my-5 relative gap-3'>
            <h3 className='text-[22px] font-bold text-[var(--color-primary-900)]'>{title}</h3>

            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {typeProduct.slice(0, visibleCount).map(item => (
                        <Cart key={item.id}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            discountPercentage={item.discountPercentage}
                            price={item.price}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>

            {visibleCount < typeProduct.length && (
                <button
                    onClick={() => setVisibleCount(prev => prev + 4)} //setVistibleCount(visibleCount + 4)
                    className="mt-4 self-center bg-[var(--color-primary-900)] text-white px-4 py-2 rounded"
                >
                    See More
                </button>
            )}
        </div>
    )
}

export default ProductSection