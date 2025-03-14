import { useEffect, useState } from "react"

interface Product{
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}


const CaseEight = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Fail to fetch products. Please try again later!');
        }
        setProducts(data);

      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

  }, [])
    console.log(products);
  let content;

  if (loading) {
    content = (<div className="h-[100vh] flex items-center font-bold text-4xl">Loading...</div>);
  }
  else if (error) {
    content = (
      <div className=" h-[100vh] text-red-600 text-sm flex items-center">
        {error}
      </div>
    );
  }
  else if (products.length>0) {
    content = (
      <div className="flex flex-wrap justify-center bg-gray-900  gap-10 py-10">
        {products.map((product) => (
          <div className="flex w-[30%] flex-col bg-gray-800 rounded text-white gap-y-2.5">
            <img
              className="h-[300px] rounded"
              src={product.image}
              alt={product.title}
            />
            <ul key={product.id} className="flex flex-col gap-y-1.5 py-3 px-5">
              <li className="text-2xl font-bold">{product.title}</li>
              <li className="font-bold">${product.price}</li>
              <li className="text-xl font-medium">{product.category}</li>
              <li>{product.description}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
  else {
    content = (
      <div className="h-[100vh] flex items-center font-medium text-xl">
        The product is not available!
      </div>
    );
  }

  return (
    <div>{content }</div>
  )
}

export default CaseEight