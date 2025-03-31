import { useEffect, useState } from 'react'
import Cart from './assets/components/Cart/Cart'
import getProduct from './assets/components/services/product';
import onlineshop from './assets/images/onlineshop.png'

function App() {
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

  return (
    <>
      <section>
        <div
          className='bg-[#E67007] w-auto h-auto'>
          <img
            className='object-contain mx-auto'
            src={onlineshop} alt="" />
        </div>
      </section>

      <section className='max-w-screen-lg mx-auto px-3 lg:ps-0'>

        <h3
          className='text-2xl font-bold py-5'>
          <span className=' text-[var(--color-accent-green)]'>New Arrival </span>
          <span className='text-[var(--color-primary-900)]'>
            Products
          </span>
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols3 lg:grid-cols-4 gap-5 '>
          {
            dataProduct.map((item) => (
              <Cart key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                discountPercentage={item.discountPercentage}
                price={item.price}
                description={item.description}
              />
            ))
          }
        </div>
      </section>

      <section className='max-w-screen-lg mx-auto my-5 px-3 lg:ps-0'>

        <h3
          className='text-2xl font-bold py-5'>
          <span className=' text-[var(--color-accent-green)]'>Popular </span>
          <span className='text-[var(--color-primary-900)]'>
            Products
          </span>
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
          {
            dataProduct.map((item) => (
              <Cart key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                discountPercentage={item.discountPercentage}
                price={item.price}
                description={item.description} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default App
