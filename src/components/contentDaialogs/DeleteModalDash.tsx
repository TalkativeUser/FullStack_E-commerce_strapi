import React from 'react'
import { useDeleteDashProductMutation } from '../../app/services/productsApis';
import { AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Button, createStandaloneToast, ModalCloseButton, Spinner } from '@chakra-ui/react';
import { ProductData } from '../../interfaces';

export default function DeleteModalDash({onClose , item }:{onClose:()=>void , item:ProductData}  ) {
  const [destroyProduct, { isLoading: isDestroying  , error}] = useDeleteDashProductMutation();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const {toast}=createStandaloneToast()


  const deleteProduct = async () => {
   const res= destroyProduct(item.id);
     const result = res.then((data) => {

              console.log('data delete =>' , data);

      if (data.error) {
        toast({
          // response pattern is not stable 
          title: `${data.error.data} ❌`,
          status: "error",
          duration: 3000,
          position: "top",
        });
      } else {
        onClose();
      }
    });
    
  

  };


  return (
    <AlertDialogContent>
           <ModalCloseButton />
           <AlertDialogHeader fontSize="lg" fontWeight="bold">
             Delete Product
           </AlertDialogHeader>
           <AlertDialogBody>
             Are you sure you want to delete this product?
           </AlertDialogBody>
           <AlertDialogFooter>
             <Button ref={cancelRef} onClick={onClose}>
               Cancel
             </Button>
             <Button
               colorScheme="red"
               ml={3}
               onClick={deleteProduct }
             >
               {isDestroying ? <Spinner color="red.500" /> : "Delete"}
             </Button>
           </AlertDialogFooter>{" "}
         </AlertDialogContent>
  )
}
