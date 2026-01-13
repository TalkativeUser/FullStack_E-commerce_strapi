import { Button, Text, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import { useRef } from 'react';
import { FocusableElement } from '@chakra-ui/utils';  
import { useDispatch, useSelector } from 'react-redux';
import { onCloseCartDrawerAction, selectGlobal } from '../app/features/globalSlice';
import {  cartActions} from '../app/features/cartSlice';
import CartDrawerItem from './CartDrawerItem';
import { cartSelector } from '../app/store';


 const CartDrawer = () => {
const {removeAllitems}=cartActions

    const onCloseDrawer=()=> dispatch(onCloseCartDrawerAction())

    const removeCartProducts=()=>{

      
        dispatch(removeAllitems() )
        onCloseDrawer()
    }

    const {isOpenCartDrawer_state}=useSelector(selectGlobal)
    const { cartProducts }=useSelector(cartSelector)
    const dispatch=useDispatch()
    const btnRef = useRef<FocusableElement>(null);
    
    return (
      <Drawer placement='right' isOpen={isOpenCartDrawer_state} onClose={onCloseDrawer} finalFocusRef={btnRef} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your shopping Cart</DrawerHeader>
  
          <DrawerBody>

            {cartProducts.length? cartProducts.map( (item)=><CartDrawerItem key={item.id} id={item.id} attributes={item.attributes}
              quantity={item.quantity} /> ) :<Text> Your cart is empety </Text>  }
            
          </DrawerBody>
  
          <DrawerFooter>
            <Button variant="outline" colorScheme='red' mr={3} onClick={removeCartProducts}>
             Clear All
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default CartDrawer