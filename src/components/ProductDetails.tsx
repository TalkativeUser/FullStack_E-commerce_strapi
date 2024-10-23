import { Card, CardBody, Flex ,Text, Image, Stack, Heading, Divider, CardFooter, Button, useColorMode } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductSkeleton from './ProductSkeleton'
import { ArrowBackIcon } from '@chakra-ui/icons'


export default function ProductDetails() {


const {id}=useParams()
const navigate=useNavigate()
const {colorMode}=useColorMode()

const getProductDetails= async ()=>{

 const {data}=await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/products/${id}?populate=thumbnail,category `)

return data

}

const {data,isLoading}=useQuery({ queryKey: ['productsDetails',id], queryFn: getProductDetails })
const goBack = () => navigate(-1)
console.log('data.data.attribute =>',data);

const imageFallBack  =  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00CUJb456deOpyOhFIB6uWUKp51oCFYmubg&s" alt={data?.data?.attributes?.category?.data?.attributes?.title} />


useEffect(()=>{


document.title=`Product ${data?.data?.attributes?.title} Page`


},[])


if(isLoading) return <div>

<ProductSkeleton />

</div>

  return (
    <div>
    <Flex 
  alignItems={"center"}
  maxW="sm"
  mx={"auto"}
  my={7}
  fontSize={"lg"}
  cursor={"pointer"}
  onClick={ goBack }
>
  <ArrowBackIcon w={20} h={10} />
  
  <Text ml={2}>Back</Text>
</Flex>

<Card maxW="sm" mx={"auto"} mb={20} border={"1px solid #a8b5c8"} bg={"none"}>
  <CardBody>
   <Image
                src={`${import.meta.env.VITE_SERVER_URL}${data.data.attributes.thumbnail.data.attributes.url}`}

      alt={data?.data?.attributes?.title}
      borderRadius="lg"
      h="200px"
      w={"full"}
      fallback={imageFallBack}
    /> 
    <Stack mt={6} spacing={3}>
      <Heading size="md" textAlign={"center"}>
        {data?.data?.attributes?.title}
      </Heading>
      <Text textAlign={"center"}>{data?.data?.attributes?.description}</Text>
      <Text color="blue.100" fontSize="2xl" textAlign={"center"}>
        {data?.data?.attributes?.category?.data?.attributes?.title}
      </Text>
      <Text color="blue.300" fontSize="2xl" textAlign={"center"}>
        {data?.data?.attributes?.price}
      </Text>
    </Stack>
  </CardBody>

  <Divider />

  <CardFooter>
    <Button
      variant="solid"
      colorScheme="purple"
      onClick={() => {}}
      w={"full"}
      size={"lg"}
      bg={colorMode === "light" ? "#e6f3fd" : "#9f7aea"}
      color={colorMode === "light" ? "black" : "white"}
      _hover={{
        bg: colorMode === "light" ? "#e6f3fd" : "#9f7aea",
        color: colorMode === "light" ? "white" : "#9f7aea",
        border: "transparent",
      }}
      p={5}
      textTransform={"uppercase"}
    >
      Add to cart
    </Button>
  </CardFooter>
</Card>
  
    </div>
  )
}
