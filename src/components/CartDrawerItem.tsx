import {Box, Button, Divider, Flex , Image, Stack , Text, useColorMode } from "@chakra-ui/react";
import { ProductData } from "../interfaces";
import { useDispatch } from "react-redux";
import {cartActions} from '../app/features/cartSlice'

 const CartDrawerItem=({attributes , quantity , id}:ProductData)=>{

    const dispatch=useDispatch()
    const {colorMode}=useColorMode()
   const { removeCartItem }=cartActions
    

    return <Box >
    <Flex alignItems={"center"} mb={2} py={2} >
        
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${attributes.thumbnail.data.attributes.url}`}
          alt="title"
          w={'60px'}
          h={'60px'}
          rounded={'full'}
          objectFit={'cover' }
          mr={2} />

           <Stack gap={0} >
              <Text my={0} py={0}  fontSize={'sm'} > {attributes.title} </Text>
              <Text my={0} py={0}  fontSize={'sm'} > price : {attributes.price} </Text>
              <Text my={0} py={0}  fontSize={'sm'} > quantity : {quantity} </Text>

              <Button   
                    bg={'transparent'}
                    color={"#f37e7eff"}
                    border={"1px solid #f05f5fff"}
                    size="xs"
                    variant="outline"
                    overflow="hidden"
                    w={"fit-content"}
                    _hover={{
                      bg: colorMode !== "light" ? "#e6f3fd" : "#f37d7dff",                      border: "transparent",
                    }}
                    mt={2}
                    onClick={()=>{ dispatch(removeCartItem(id)) }}

                  >
                     remove
             </Button>

           </Stack>
           
    </Flex>

    <Divider/>

    </Box> 
    
    




}

export default CartDrawerItem;