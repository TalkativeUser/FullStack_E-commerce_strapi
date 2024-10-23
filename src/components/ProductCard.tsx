import { Card, CardBody, Stack, Heading ,Image , Text, useColorMode, Button } from '@chakra-ui/react'
import { Link} from 'react-router-dom'
import { ProductAttributes } from '../interfaces'


interface IProps {

  productAttributes:ProductAttributes,
  productId:number
}

export default function ProductCard( {productAttributes ,productId} :IProps) {
const {colorMode}=useColorMode()



console.log("productAttributes=>>>>" , import.meta.env);


  return ( 
    <div>
      <Card  border={'1px solid #e2e8f0a3'} bg={'transparent'} >
  <CardBody>
            <Image
            src={`${import.meta.env.VITE_SERVER_URL}${productAttributes.thumbnail.data.attributes.url}`}
            alt={productAttributes.title}
            borderRadius='50%'
            width={150}
            height={150}
            mx={'auto'}
            objectFit={'cover'}
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md' textAlign={'center'}  >{productAttributes.title} </Heading>

            <Text textAlign={'center'}   >
                {productAttributes.description}
            </Text>
            <Text textAlign={'center'} color='purple.600' fontSize={'xl'} >
                ${productAttributes.price}
            </Text>

            <Button
                    as={Link}
                    to={`/products/${productId}`}
                    bg={colorMode === "light" ? "#e6f3fd" : "#9f7aea"}
                    color={colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}
                    size="xl"
                    variant="outline"
                    border="none"
                    py={3}
                    overflow="hidden"
                    w={"full"}
                    _hover={{
                      bg: colorMode !== "light" ? "#e6f3fd" : "#9f7aea",
                      color: colorMode === "light" ? "white" : "#9f7aea",
                      border: "transparent",
                    }}
                    mt={6}
                  >
                    View Details
          </Button>


            </Stack>
  </CardBody>
 
</Card>

    </div>
  )
}
