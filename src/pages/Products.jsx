import { useContext } from 'react';
import ProductCard from '../components/Products/ProductCard';
import { Context } from '../providers/ContextProvider';

const Products = () => {

    const  {products} = useContext(Context);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-12 container mx-auto md:gap-6'>
                <div className='col-span-3 md:mt-4 border-2 max-h-96'>
                    <h1 className='text-center text-2xl font-semibold border-b-2'>Filter</h1>
                </div>
                <div className='col-span-9'>
                    <div className='md:my-4'>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-14 mb-10'>
                        {
                            products.map((item, index) => <ProductCard key={index} item={item}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </>

    );
};

export default Products;