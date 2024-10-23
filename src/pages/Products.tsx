import { Grid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { ProductData } from "../interfaces";
import { useQuery } from "@tanstack/react-query";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Products() {



  const getProductList=async ()=>{
     const data= await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products`,{  params:{ populate:"thumbnail,category" }} )
    return data.data
}

const  {isLoading,data,isError} = useQuery({ queryKey: ['products'], queryFn: getProductList })

if(isError) console.log( 'error from react query' )



if(isLoading) {
  return (
    <Grid margin={30} templateColumns={"repeat(auto-fill,minmax(300px,1fr))"} gap={6} >
{Array.from({length:10},(_,index)=> <ProductSkeleton key={index} />)
}
</Grid>

  )

}


  return (
    <Grid margin={30} templateColumns={"repeat(auto-fill,minmax(300px,1fr))"} gap={6} >


  { data.data?.map( (product:ProductData)=> (

<ProductCard key={product.id} productId={product.id} productAttributes={product.attributes} />

  )   ) }

    </Grid >
  )
}

