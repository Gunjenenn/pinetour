"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home({ params }) {
  const unwrappedParams = use(params);
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [relatedProducts, setRelatedProducts ] = useState([])
  const productId = unwrappedParams.productId;
  const router = useRouter()

useEffect(() => {
    const fetchProducts = async () => {
      let response
        response = await fetch(`https://dummyjson.com/products/${productId}`)
    
      const data = await response.json()
      setProducts(data)
      setIsLoading(false)

    }
    fetchProducts()
  }, []);

  useEffect(() => {
    const relatedProduct = async () => {
        if(products===null) return;
       const response = await fetch(`https://dummyjson.com/products/category/${products.category}`)
      const data = await response.json()
      setRelatedProducts(data.products.filter((p)=> {
        return Number(p.id) !== Number(products.id)
      }).slice(0,4))
    }
    relatedProduct() 
  }, [products])

  const handleRedirect = (productId) => {
    router.push(`/product/${productId}`)}

  if (isLoading) return 'Loading...'
    
  console.log(products)

  return(
<div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
  <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* Product Image Section */}
      <div className="flex flex-col gap-4">
        <div className="aspect-square w-full rounded-xl bg-slate-100 border border-slate-200/60 overflow-hidden relative group">
          <img 
            src={products.thumbnail || products.images?.[0]} 
            alt={products.title} 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          {/* Brand & Ratings Row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-3 py-1 rounded-full">
              {products.brand}
            </span>
            
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
              <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-semibold text-amber-700">{products.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {products.title}
          </h1>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {products.description}
          </p>

          {/* Price & Discount Section */}
          <div className="pt-2 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-slate-900">
              ${products.price}
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
              {products.discountPercentage}% OFF
            </span>
          </div>

          <hr className="border-slate-100 my-4" />

          {/* Status & Metadata Grid */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-slate-400 font-medium mb-1">Availability</p>
              <p className="font-semibold text-slate-700">{products.availabilityStatus}</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-slate-400 font-medium mb-1">Stock Left</p>
              <p className="font-semibold text-slate-700">{products.stock} units</p>
            </div>

            <div className="col-span-2 p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between">
              <span className="text-slate-400 font-medium">Shipping</span>
              <span className="font-semibold text-slate-700">{products.shippingInformation}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 space-y-3">
          <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 shadow-sm">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  </div>
<div className="w-full mt-10">
  <h2 className="text-xl font-bold text-slate-900 mb-4">Related Products</h2>
  
  {/* Хажуу тийшээ гүйлгэдэг контейнер */}
  <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x scrollbar-thin">
    {relatedProducts?.map((product) => { 
      return (
        <Card 
          key={product.id} 
          className="w-60 shrink-0 snap-start flex flex-col justify-between overflow-hidden border border-slate-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
        >
          <div>
            {/* Барааны зураг */}
            <CardContent className="p-0 aspect-square overflow-hidden bg-slate-50 relative group">
              <img 
                src={product.thumbnail} 
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </CardContent>

            {/* Нэр болон тайлбар */}
            <CardHeader className="p-4 space-y-1">
              <CardTitle className="line-clamp-1 text-base font-semibold text-slate-900">
                {product.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 text-xs text-slate-500">
                {product.description}
              </CardDescription>
            </CardHeader>
          </div>

          {/* Товчлуур */}
          <div className="p-4 pt-0">
            <Button 
              onClick={() => handleRedirect(product.id)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs py-2 rounded-lg transition-colors"
            >
              View product
            </Button>
          </div>
        </Card>
      );
    })}
  </div>
</div>
</div>
    )

}