import { useEffect, useState } from 'react';
import DropdownComponent from "./DropDown"

const Products = (props) => {
  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);


  useEffect(() => {
             fetch(`https://fakestoreapi.com/products/`)
                .then(async (res) => {
                const response = await res.json();
                setAllProducts(response);
                })
                .then(json => console.log(json))
  }, []);

    useEffect(() => {
      setAllProducts(data);
    }, [data])

  return (
    <div className="bg-white">
      
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <DropdownComponent setProducts={setData}/>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
        <div className="mt-6 grid shadow-gray-400 grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {allProducts.filter((pro) => {
            return props.search.toLowerCase() === '' ? pro : pro.title.toLowerCase().includes(props.search);
          }).map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Products;

