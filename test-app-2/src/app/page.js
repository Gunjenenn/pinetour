'use client'

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      let response
      if (searchValue === '') {
         response= await fetch('https://dummyjson.com/products')
      } else {
        response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      }
      const data = await response.json()
      setProducts(data.products)
      setIsLoading(false)

    }
    fetchProducts()
  }, [searchValue])

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value)
  }


  if (isLoading) return 'Loading...'


  const handleRedirect = (productId) => {
    router.push(`/product/${productId}`)
  }
  
  return (
    <div className="min-h-screen bg-slate-50/50 p-6 sm:p-8 text-slate-900">
  <div className="mx-auto max-w-7xl space-y-6">
    
    {/* Header & Search Bar Section */}
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-5">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products</h1>
        <p className="text-sm text-slate-500 mt-1">Browse and explore available items</p>
      </div>
      
      <div className="w-full sm:max-w-xs">
        <Input 
          value={searchValue} 
          onChange={handleSearchInput} 
          placeholder="Search products..."
          className="w-full bg-white shadow-sm border-slate-200 focus-visible:ring-2 focus-visible:ring-indigo-500"
        />
      </div>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => {
        return (
          <Card 
            key={product.id} 
            className="group flex flex-col justify-between overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border border-slate-200 bg-white rounded-xl"
          >
            <div>
              {/* Product Image Wrapper */}
              <CardContent className="p-0 aspect-square overflow-hidden bg-slate-100 relative">
                <img 
                  src={product.thumbnail} 
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>

              {/* Card Text Content */}
              <CardHeader className="p-4 space-y-1.5">
                <CardTitle className="line-clamp-1 text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {product.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs text-slate-500 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </div>

            {/* Action Footer */}
            <div className="p-4 pt-0">
              <Button 
                onClick={() => handleRedirect(product.id)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-150 font-medium text-sm rounded-lg"
              >
                View product
              </Button>
            </div>
          </Card>
        )
      })}
    </div>

  </div>
</div>
  );
}