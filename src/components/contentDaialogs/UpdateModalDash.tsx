import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
  Button,
  HStack,
  createStandaloneToast,
} from "@chakra-ui/react";
import {useRef, useState } from "react";
import { ProductData } from "../../interfaces";
import { useUpdateProductMutation } from "../../app/services/productsApis";

export default function UpdateModalDash({
  item,
  onClose,
}: {
  item: ProductData;
  onClose: () => void;
}) {
  const initialRef = useRef(null);
  const [updateProductData, setUpdateProductData] = useState(item);
  const [updateProduct, { isError, isLoading, error }] =
    useUpdateProductMutation();
console.log(
  '%cloading update product =>>>>>>>> ',
  'color: green; font-weight: bold; font-size: 19px;',
  error
);    
  const { toast } = createStandaloneToast();
const [thumbnail, setThumbnail] = useState<Blob | string>('')

  const handleChangeTextType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdateProductData((prev) => ({
      ...prev,
      attributes: { ...prev.attributes, [name]: value },
    }));
  };

  const handleChangeNumberType = (target: { name: string; value: string }) => {
    const { name, value } = target;
    setUpdateProductData((prev) => ({
      ...prev,
      attributes: { ...prev.attributes, [name]: value },
    }));
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData=new FormData()
    formData.append("data",JSON.stringify({
      title:updateProductData.attributes.title,
      price:updateProductData.attributes.price,
      stock:updateProductData.attributes.stock,
      description:updateProductData.attributes.description

    }) )

    formData.append('files.thumbnail',thumbnail)
    updateProduct({
      id: updateProductData.id,
      data: formData,
    });
     onClose();

  };
  // const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const res = updateProduct({
  //     id: updateProductData.id,
  //     dtat: updateProductData.attributes,
  //   });
  //   const result = res.then((data) => {

        
  //     if (data.error) {
  //       toast({
  //         title: ` ${data.error.data.error.name} : ${data.error.data.error.message} ❌`,
  //         status: "error",
  //         duration: 3000,
  //         position: "top",
  //       });
  //     } else {
  //       onClose();
  //     }
  //   });
  // };

  return (
    <ModalContent>
      <ModalHeader>Update Product</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Title </FormLabel>
            <Input
              ref={initialRef}
              value={updateProductData.attributes.title}
              name="title"
              onChange={(e) => {
                handleChangeTextType(e);
              }}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <NumberInput
              value={updateProductData.attributes.price}
              name="price"
              onChange={(e) => {
                handleChangeNumberType({
                  name: "price",
                  value: e,
                });
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Stock</FormLabel>
            <NumberInput
              value={updateProductData.attributes.stock}
              name="stock"
              onChange={(e) => {
                handleChangeNumberType({
                  name: "stock",
                  value: e,
                });
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Thumbnail </FormLabel>
          <Input
              id="thumbnail"
              type="file"
              h="full"
              p="2"
              accept="image/png, image/gif, image/jpeg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                console.log('file => ' , file);
                
                if (file) {
                  setThumbnail(file);
                }
              }}
            />

          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description </FormLabel>
            <Textarea
              value={updateProductData.attributes.description}
              name="description"
              onChange={(e) => {
                handleChangeTextType(e);
              }}
              placeholder="Here is a sample placeholder"
            />
          </FormControl>

          <HStack justifyContent={"end"} mt={"4"}>
            <Button colorScheme="blue" mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </HStack>
        </Box>
      </ModalBody>

      {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} type='submit' >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
    </ModalContent>
  );
}
