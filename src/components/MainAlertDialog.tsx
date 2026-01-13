import {
  AlertDialog,
  AlertDialogOverlay,
//   AlertDialogCloseButton,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface MainAlertDialogProps {
    isOpen: boolean;
    onClose: () => void;
    cancelRef: React.RefObject<HTMLButtonElement>;
    children: ReactNode;
}

export default function MainAlertDialog( { isOpen, onClose, cancelRef, children }: MainAlertDialogProps ) {
 

  return (
    <>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay bg={'blackAlpha.500'} backdropFilter="blur(5px) hue-rotate(90deg)"  >
         {
          children
         }
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
 
         
        // leastDestructiveRef={cancelRef}
        // Chakra بتستخدم leastDestructiveRef علشان:

// لما الـ dialog يفتح

// ويضغط المستخدم Enter

// أو يحصل focus تلقائي

// ➡️ التركيز يروح على زر Cancel مش زر Delete

// وده مهم جدًا من ناحية:

// UX

// Accessibility (خصوصًا للي بيستخدموا الكيبورد أو screen readers)