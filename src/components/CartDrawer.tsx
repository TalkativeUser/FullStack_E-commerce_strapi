import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { FocusableElement } from '@chakra-ui/utils';  // إضافة النوع الصحيح
import { useDispatch, useSelector } from 'react-redux';
import { onCloseCartDrawerAction, selectGlobal } from '../app/features/globalSlice';


 const CartDrawer = () => {

    const onCloseDrawer=()=>  dispatch( onCloseCartDrawerAction())

    const {isOpenCartDrawer_state}=useSelector(selectGlobal)
    const dispatch=useDispatch()
    const btnRef = useRef<FocusableElement>(null);
    
    return (
      <Drawer placement='right' isOpen={isOpenCartDrawer_state} onClose={onCloseDrawer} finalFocusRef={btnRef} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your shopping Cart</DrawerHeader>
  
          <DrawerBody>
            <Input placeholder="Type here ..." />
          </DrawerBody>
  
          <DrawerFooter>
            <Button variant="outline" colorScheme='red' mr={3} onClick={onCloseDrawer}>
             Clear All
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default CartDrawer