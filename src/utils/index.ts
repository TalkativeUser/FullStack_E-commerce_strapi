
//  الفانكشن دى زى اللى متهمشه تحت لكن الفرق ان دى ابس فى القراءه والفهم بس تعتبر هتاخد وقت اكثر فى التنفيذ عن اللى تحت لكن فرق بسيط وهو 
// اللى تحت الوقت بتاعها  big O(n) لكن دى بتاخد  big O(2n) بس طبعا معروفه ان الثوابت بتتشال وبيتم احتساب ال  n  فقط يبقا الفانكشن دى 
//  هتشيل ال 2 يتبقا ال  n  وتعتبر زى اللى تحت بس فى حاجه لو مشروع كبير وداتا كتير اللى تحت هتكون افضل الف مره عشان اسرع 
// وبكل فخر انا اللى عامل اللى تحت انما محمد نجا هو اللى كاتب الفانكشن الاولى دى فى الكورس 

import { ProductData } from "../interfaces";
import { createStandaloneToast } from "@chakra-ui/react";

const {toast}=createStandaloneToast()
export const isAddToCart_or_increesQuantity = (cartProducts: ProductData[],productClickedAdded: ProductData) => {
    const existsItem = cartProducts.find(item => item.id === productClickedAdded.id);

    if (existsItem) {
        toast({
            title: "Added to your Cart.",
            description: "This item already exists, the quantity will be increased",
            status: "success",
            duration: 2000,
            isClosable: true,
        });

        return cartProducts.map(item =>
            item.id === productClickedAdded.id&& item.quantity ? 
              { ...item, quantity: item.quantity + 1 } : item
        );
    }

    toast({
        title: "success Added to your Cart.",
        status: "success",
        duration: 2000,
        isClosable: true,
    });
    return [...cartProducts, { ...productClickedAdded, quantity: 1 }];
};



//  الفانكشن دى معقده سنه بسيطه لكنها افضل فى السرعه لان يعتبر الوقت بتاعها  big O(n)

// import { ProductData } from "../interfaces";

// export const isAddToCart_or_increesQuantity = ( cartProducts: ProductData[],productClickedAdded: ProductData ) => {

//     //  this case for if the cart prodcuts is empty and this first time added product to shopping cart
//     if(cartProducts.length==0) {
//         return cartProducts=[{...productClickedAdded,quantity:1}]
      
//     }

//     // this case for if the cart prodcuts is not empty , in this case we'll check on matching new product and old prodcuts with id 
    
//     let isFounded=false;
//     cartProducts = cartProducts.map(  (item) =>{

// //  احنا عملنا الشرط ده عشان نشوف العنصر موجود ولا  لأ  لانه لو مش موجود الماب اصلا مش هتعرف تضيفه لانها هترجعلك الارى القديمه زى ما هى 
//         if(item.id === productClickedAdded.id) isFounded=true;


//         return  item.id === productClickedAdded.id && item.quantity  ?
        
//         { ...item, quantity: item.quantity + 1 } 
         
//          :
//         //   السطر اللى تحتى ده شغال فى حالة ان ده عنصر مش موجوود بالفعل فى الارى 
//          item
//     }

//     );


//     if(isFounded==false){

//         return [...cartProducts,{...productClickedAdded,quantity:1}]
//     }

//     return cartProducts;
// }
